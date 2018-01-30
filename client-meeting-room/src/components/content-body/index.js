import React from 'react';
import { compose } from 'react-apollo';

import Floor from '../floor';
import Substrate from '../substrate';
import TimeLine from '../time-line'

import './index.css';
import gqlLodash from '../../queries/gqlLodash';
import roomsQuery from '../../queries/rooms';
import eventsQuery from '../../queries/events';

function getFloors(settings, rooms, moment) {
  const arr = [];
  const floors = rooms.reduce((res, room, i) => {
    if (!res[room.floor]) res[room.floor] = { rooms: [] };
    res[room.floor].rooms.push(room);

    return res
  }, {});

  for (let key in floors) {
    arr.push(<Floor key={key} floorNumber={key} rooms={floors[key].rooms} settings={settings} moment={moment} />);
  }

  return arr;
}

const Content = ({ roomsQuery, eventsQuery, moment, settings }) => {
  if (roomsQuery.loading || eventsQuery.loading) return <div />
  const getValue = (hourOrMinute, eventDate) => {
    if (hourOrMinute === 'hour') return new Date(eventDate).getHours();
    return new Date(eventDate).getMinutes();
  }
  const getSpendTime = (dateStart, dateEnd, settings, moment) => {
    return (new Date(dateEnd) - new Date(dateStart)) / 3600000;
  }

  const rooms = roomsQuery.rooms.map(room => {
    const events = eventsQuery.events.reduce((r, event) => {
      if (room.id === event.room.id) {
        const key = getValue('hour', event.dateStart);
        const dataEvent = {
          start: {
            hour: key,
            minute: getValue('', event.dateStart)
          },
          end: {
            hour: getValue('hour', event.dateEnd),
            minute: getValue('', event.dateEnd)
          },
          spendTime: getSpendTime(event.dateStart, event.dateEnd),
          title: event.title
        }
        if (r[key]) {
          r[key].push(dataEvent);
        } else {
          r[key] = [dataEvent];
        }
      }
      return r;
    }, {})

    return {
      ...room,
      events
    }
  })

  return (
    <div className="content-body">
      {
        getFloors(settings, rooms, moment)
      }
      <Substrate settings={settings} />
      <TimeLine settings={settings} />
    </div>
  )
};

export default compose(
  gqlLodash(roomsQuery, { name: 'roomsQuery' }),
  gqlLodash(eventsQuery, {
    name: 'eventsQuery',
    options: ({ moment }) => ({
      variables: { dateStart: moment }
    }),
  })
)(Content);

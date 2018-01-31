import React from 'react';

import SelectDate from '../select-date';
import Cell from '../cell';
import Room from '../room';
import FreeTime from '../free-time';
import Hour from '../hour';
import Event from '../event';

import './index.css';

function getChild(show, i, start, end, roomTitle, moment, floor, roomId) {
  switch (show) {
    case 'menu': return <Hour currHour={i} hEnd={end} hStart={start} />
    case 'room': return <FreeTime hStart={i} roomTitle={roomTitle} moment={moment._d} floor={floor} roomId={roomId} />
    case 'substrate': return <div className="substrate-chunk" />
    default: return ''
  }
}

const content = (settings, room = {}, show, moment) => {
  const arr = [];
  const start = settings.startTime;
  const end = settings.endTime;
  const events = room.events || {};
  const members = '';
  const { title: roomTitle, floor, id: roomId } = room;

  let mEndPreviousEvent = 0;
  let hEndPreviousEvent = start;

  for (let i = start; i < end; i++) {
    if (!events[i]) {
      arr.push(
        <Cell key={`${i}:${mEndPreviousEvent}`} valueFlexGrow={`${(60 - mEndPreviousEvent) / 60}`}>
          {getChild(show, i, start, end, roomTitle, moment, floor, roomId)}
        </Cell>
      );
      mEndPreviousEvent = 0;
    } else {
      events[i].forEach(event => {
        const mStart = event.start.minute;
        const mEnd = event.end.minute;
        const hEnd = event.end.hour;

        let valueFlexGrow;

        if (mStart !== mEndPreviousEvent) {
          valueFlexGrow = (mStart - mEndPreviousEvent) / 60;
          arr.push(
            <Cell key={`${roomTitle}-${i}:${mEndPreviousEvent}`} valueFlexGrow={`${valueFlexGrow}`}>
              <FreeTime
                hStart={i}
                mStart={mEndPreviousEvent}
                mEnd={mStart}
                hEnd={i}
                roomTitle={roomTitle}
                moment={moment}
                floor={floor}
                roomId={roomId}
              />
            </Cell>
          );
        }

        arr.push(
          <Cell key={`${roomTitle}-${i}:${mStart}`} valueFlexGrow={event.spendTime}>
            <Event event={event} roomTitle={room.title} members={members} />
          </Cell>
        );

        mEndPreviousEvent = mEnd;
        hEndPreviousEvent = hEnd;

      });
      if (hEndPreviousEvent > i) {
        i = hEndPreviousEvent - 1;
      } else {
        arr.push(
          <Cell key={`${roomTitle}-${i}:${mEndPreviousEvent}`} valueFlexGrow={`${(60 - mEndPreviousEvent) / 60}`}>
            <FreeTime
              hStart={i}
              mStart={mEndPreviousEvent}
              mEnd='00'
              hEnd={i + 1}
              roomTitle={roomTitle}
              moment={moment}
              floor={floor}
              roomId={roomId}
            />
          </Cell>
        );
        mEndPreviousEvent = 0;
      }
    }
  }
  return arr;
}

export default ({ settings, show, room = {}, moment, onChange }) => (
  <div className="grid">
    <Cell valueFlexGrow={settings.mainCell} className="mainCell">
      {
        show === 'substrate'
          ?
          <div className="chunk-first" />
          :
          (show === 'menu' ? <SelectDate moment={moment} onChange={onChange} /> : <Room {...room} />)
      }
    </Cell>
    <Cell valueFlexGrow={settings.firstEmptyCell}>
      {
        show === 'room' ? <div className="emptyEvent" />
          :
          show === 'substrate' ? <div className="substrate-chunk" /> : ''
      }
    </Cell>
    {
      content(settings, room, show, moment)
    }
    <Cell valueFlexGrow={settings.lastEmptyCell}>{show === 'room' ? <div className="emptyEvent" /> : ''}</Cell>
  </div>
);
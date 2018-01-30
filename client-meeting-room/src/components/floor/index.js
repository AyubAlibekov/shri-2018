import React from 'react';
import './index.css';

import Grid from '../grid';

export default ({ floorNumber, rooms, settings, moment }) => {
  return (
    <div className="floor">
      <div className="floor__number">{floorNumber} этаж</div>

      {
        rooms.map((room, i) => <Grid key={`room-${i}`} settings={settings} show="room" room={room} moment={moment} />)
      }
    </div>
  )
}
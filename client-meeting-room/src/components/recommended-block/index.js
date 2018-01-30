import React from 'react'

import close from '../../images/close.svg';

import './index.css';

export default ({ roomList, mStart = '00', mEnd = '15', hStart = '11', hEnd = '12', title = 'Редактирование встречи' }) => (
  <div className="recommended-block">
    {title}
    <ul className="recommended-room">
      {
        roomList.map(room =>
          <li key={room.title}>
            {hStart}:{mStart}—{hEnd}:{mEnd}
            <span className="recommended-room__title">
              {room.title}&nbsp;·&nbsp;{room.floor}&nbsp;этаж
            </span>
          </li>
        )
      }
    </ul>
  </div>
);

import React from 'react';

import './index.css';

export default ({ event = {}, roomTitle, members = [], show }) => {
  const day = event.day || 14;
  const month = event.month || 'декабрь';
  const hStart = event.start && event.start.hour;
  const hEnd = event.end && event.end.hour;

  const avatar = members[0] && members[0].avatar;
  const userName = members[0] && members[0].userName;

  let mStart = event.start && event.start.minute;
  let mEnd = event.end && event.end.minute;

  if (mStart === 0) mStart = '00';
  if (mEnd === 0) mEnd = '00';

  return (
    <div className={`tooltip ${show ? '' : 'hidden'}`}>
      <div className="tooltip__event-title">{roomTitle}</div>
      <div className="tooltip__event-info">{
        `${day} ${month}, ${hStart}:${mStart}—${hEnd}:${mEnd}  ·  ${roomTitle}`
      }</div>
      <div className="tooltip__event-members">
        <img src={avatar} className="avatar" alt="avatar" />
        <span>
          {userName} <span>и {members.length - 1} участников</span>
        </span>
      </div>
    </div>
  )
};
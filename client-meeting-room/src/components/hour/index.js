import React from 'react';

import './index.css';

export default ({ currHour, hEnd, hStart }) => {
  if (currHour === hEnd - 1) {
    return (
      <div>
        <div className="left-half">
          <div className="hour">{currHour}</div>
        </div>
        <div className="right-half">
          <div className="last-hour">{hEnd}</div>
        </div>
      </div>
    )
  }
  return (
    <div className="wrap-hour">
      <div className="hour">{currHour === hStart ? `${hStart}:00` : currHour}</div>
    </div>
  )
};

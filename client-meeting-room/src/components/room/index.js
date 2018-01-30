import React from 'react';
import './index.css';

export default ({ title, capacity }) => (
  <div className="room">
    <div className="room__title">{title}</div>
    <div className="room__capacity">до {capacity} человек</div>
  </div>
)
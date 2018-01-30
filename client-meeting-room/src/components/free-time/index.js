import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default ({ hStart, hEnd, mStart, mEnd, roomTitle, moment }) => {

  const state = {
    moment,
    hStart,
    roomTitle,
    hEnd: hEnd || hStart + 1,
    mStart: mStart || '00',
    mEnd: mEnd || '00',
  }

  return (
    <Link to={{ pathname: '/create', state }} className="body__link"> + </Link>
  )
};
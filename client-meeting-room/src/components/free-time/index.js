import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default (props = {}) => {

  const state = {
    ...props,
    hEnd: props.hEnd || props.hStart + 1,
    mStart: props.mStart || '00',
    mEnd: props.mEnd || '00',
  }

  return (
    <Link to={{ pathname: '/create', state }} className="body__link"> + </Link>
  )
};
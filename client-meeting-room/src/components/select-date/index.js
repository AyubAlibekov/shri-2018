import React from 'react'
import './index.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import arrow from '../../images/arrow.svg';
import arrow2 from '../../images/arrow2.svg';

export default ({ moment, onChange }) => (
  <div className="select-date">
    <img src={arrow2} className="arrow2 circle" alt="arrow2" />
    <DatePicker
      className="three-month"
      selected={moment}
      onChange={onChange}
      dateFormat="LL"
      monthsShown={3}
    />
    <img src={arrow} className="arrow circle" alt="arrow" />

  </div>
)


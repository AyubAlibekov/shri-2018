import React from 'react'

import TimePicker from 'rc-time-picker';
import './rc-time-picker.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import calendar from '../../images/calendar.svg';

import './index.css';

export default ({ eventStart, eventEnd, eventDay, handleChangeDayTime }) => (
  <div className="date-time">
    <div className="date-input">
      Дата
          <div className="DatePicker-wrap">
        <label htmlFor="DatePickerId">
          <img src={calendar} className="calendar" alt="calendar" />
        </label>
        <DatePicker
          id="DatePickerId"
          className="date-time__datepiker"
          selected={eventDay}
          onChange={handleChangeDayTime('eventDay')}
          dateFormat="LL"
        />
      </div>
    </div>
    <div className="time-input-wrap">
      <div className="time-start">
        Начало
            <TimePicker
          minuteStep={15}
          defaultValue={eventStart}
          onChange={handleChangeDayTime('eventStart')}
          showSecond={false}
          allowEmpty={false}
        />
      </div>
      &nbsp;—&nbsp;
          <div className="time-end">
        Конец
            <TimePicker
          minuteStep={15}
          defaultValue={eventEnd}
          onChange={handleChangeDayTime('eventEnd')}
          showSecond={false}
        />
      </div>
    </div>
  </div>
);

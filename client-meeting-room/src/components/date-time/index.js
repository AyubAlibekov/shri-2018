import React, { Component } from 'react'

import momemt from 'moment';

import TimePicker from 'rc-time-picker';
import './rc-time-picker.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import calendar from '../../images/calendar.svg';

import './index.css';

export default class componentName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...props,
      focused: false,
      moment: momemt(props.moment)
    }

    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggle(event) {
    this.setState({ focused: !this.state.focused });
  }

  onChange(moment) {
    this.setState({ moment });
  }

  render() {
    return (
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
              selected={this.state.moment}
              onChange={this.onChange}
              dateFormat="LL"
            />
          </div>
        </div>
        <div className="time-input-wrap">
          <div className="time-start">
            Начало
            <TimePicker
              minuteStep={15}
              defaultValue={this.state.moment}
              onChange={this.onChange}
              showSecond={false}
              allowEmpty={false}
            />
          </div>
          &nbsp;—&nbsp;
          <div className="time-end">
            Конец
            <TimePicker
              minuteStep={15}
              defaultValue={this.state.moment}
              onChange={this.onChange}
              showSecond={false}
            />
          </div>
        </div>
      </div>
    )
  }
};

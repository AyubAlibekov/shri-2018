import React, { Component } from 'react'

import moment from 'moment';

import Menu from '../menu';
import ContentBody from '../content-body';

import './index.css';

const settings = {
  startTime: 8,
  endTime: 23,
  mainCell: '3.33',
  firstEmptyCell: '0.5',
  lastEmptyCell: '0.2'
};

export default class componentName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      moment: moment()
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(moment) {
    this.setState({ moment });
  }
  render() {
    return (
      <div className="content">
        <Menu settings={settings} moment={this.state.moment} onChange={this.onChange} />
        <ContentBody settings={settings} moment={this.state.moment} />
      </div>
    )

  }
}




import React, { Component } from 'react'
import Tooltip from '../tooltip';

import './index.css';


export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      event: props.event,
      roomTitle: props.roomTitle,
      members: props.members
    }

    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="event" onClick={this.toggleClass}>
        <Tooltip
          show={this.state.show}
          event={this.state.event}
          roomTitle={this.state.roomTitle}
          members={this.state.members}
        />
      </div>
    )
  }
}







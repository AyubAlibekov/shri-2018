import React, { Component } from 'react'

import './index.css';

export default class componentName extends Component {
  constructor(props) {
    super(props)

    this.FR = 5.254980079681275 // 100 * ширина компонента(hour) / ширину компонента (grid)

    const start = +props.settings.mainCell + +props.settings.firstEmptyCell;
    this.hStart = props.settings.startTime;
    this.hEnd = props.settings.endTime;
    const now = new Date();
    const hNow = now.getHours();
    const mNow = now.getMinutes();

    this.sNow = now.getSeconds();

    this.state = {
      now,
      offset: (start + (hNow - this.hStart) + (mNow / 60)) * this.FR,
    }
  }

  componentDidMount() {
    const ms = (60 - this.sNow) * 1000;
    setTimeout(() => this.setState({
      offset: this.state.offset + (this.FR / 60),
      now: new Date(this.state.now.setMinutes(this.state.now.getMinutes() + 1))
    }), ms);
  }

  componentDidUpdate = (prevProps, prevState) => {
    setTimeout(() => this.setState({
      offset: prevState.offset + (this.FR / 60),
      now: new Date(this.state.now.setMinutes(this.state.now.getMinutes() + 1))
    }), 60000);
  }

  render() {
    const hNow = this.state.now.getHours();
    const mNow = this.state.now.getMinutes();

    let hidden = 'hidden';

    if (hNow >= this.hStart && hNow < this.hEnd) {
      hidden = '';
    }

    return (
      <div style={{ left: `${this.state.offset}%` }} className={`time-line ${hidden}`}>
        <div className="time-scoreboard">
          {`${hNow > 9 ? hNow : `0${hNow}`}:${mNow > 9 ? mNow : `0${mNow}`}`}
        </div>
      </div>
    )
  }
}

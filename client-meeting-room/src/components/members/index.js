import React, { Component } from 'react'

import Select from 'react-select';

import close from '../../images/close.svg';

import './index.css';

/* const USERS = [
  { id: 1, login: 'John Smith', homeFloor: '7', avatarUrl: 'img/avaM.png', },
  { id: 2, login: 'Merry Jane', homeFloor: '2', avatarUrl: 'img/avaF.png', },
  { id: 3, login: 'Stan Hoper', homeFloor: '4', avatarUrl: 'img/unknown.png', },
  { id: 4, login: 'Johnsdfg Smithon', homeFloor: '7', avatarUrl: 'img/ava.png', },
  { id: 5, login: 'Maori Janere', homeFloor: '2', avatarUrl: 'img/ava1.png', },
  { id: 6, login: 'Stephan Bonnar', homeFloor: '4', avatarUrl: 'img/ava2.jpeg', },
  { id: 7, login: 'Jennifer Popez', homeFloor: '7', avatarUrl: 'img/ava3.jpeg', },

]; */

class CustomOption extends Component {
  constructor(props) {
    super(props);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  handleMouseDown(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSelect(this.props.option, event);
  }
  handleMouseEnter(event) {
    this.props.onFocus(this.props.option, event);
  }
  handleMouseMove(event) {
    if (this.props.isFocused) return;
    this.props.onFocus(this.props.option, event);
  }
  render() {
    const avatarUrl = this.props.option && this.props.option.avatarUrl;
    const floor = this.props.option && this.props.option.homeFloor;
    const userName = this.props.option && this.props.option.login;
    return (
      <div className={this.props.className}
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.handleMouseMove}
      >
        <img src={avatarUrl} className="avatar" alt="avatar" />
        {userName} · <span className="member__homeFloor">&nbsp;{floor} этаж</span>
      </div>
    );
  }
};

export default ({ members, users, handleDeselectMember, handleSelectMember }) => {
  const placeholder = <span> &#9786; Select User </span>;
  const userList = users.map(user => ({
    ...user,
    value: user.login + user.homeFloor,
  }))

  return (
    <div className="members">
      Участники
      <Select
        onChange={handleSelectMember}
        optionComponent={CustomOption}
        options={userList}
        placeholder={placeholder}
        value={undefined}
      />
      <SelectedMembers members={members} handleDeselect={handleDeselectMember} />
    </div >
  );
};

const SelectedMembers = ({ members, handleDeselect }) => (
  <div className="members__container">
    {
      members.map(member =>
        <div key={member.id} className="member__selected">
          <img src={member.avatarUrl} className="avatar" alt="avatar" />
          <span>{member.login}</span>
          <img
            src={close}
            className="member__deselect"
            alt="close"
            onClick={() => handleDeselect(member)}
          />
        </div>
      )
    }
  </div>
);

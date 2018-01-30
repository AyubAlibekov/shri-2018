import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { compose } from 'react-apollo';
import gqlLodash from '../../queries/gqlLodash';
import usersQuery from '../../queries/users';

import close from '../../images/close.svg';
import Members from '../members';
import DateTime from '../date-time';
import RecommendedBlock from '../recommended-block';
import Footer from '../footer';

import './index.css';

class Meeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      topicValue: '',
      roomList: [{
        title: 'test',
        floor: 2
      },
      {
        title: 'test1',
        floor: 2
      }],
      selectedRoom: {},

      users: [],
      members: [],
    }

    this.handleChangeTopic = this.handleChangeTopic.bind(this);
    this.handleSelectMember = this.handleSelectMember.bind(this);
    this.handleDeselectMember = this.handleDeselectMember.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      users: nextProps.usersQuery.users
    })
  }


  handleChangeTopic(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  handleSelectMember(member) {
    const members = this.state.members;
    members.push(member);
    this.setState({
      members,
      users: this.state.users.filter(user => user.id !== member.id)
    });
  }

  handleDeselectMember(member) {
    const users = this.state.users;
    users.push(member);
    this.setState({
      users,
      members: this.state.members.filter(user => user.id !== member.id)
    });
  }

  onSave() {
    debugger;
  }

  render() {
    if (this.props.usersQuery.loading) return <div />
    const { members, users, roomList } = this.state;
    return (
      <div>
        <div className="meeting">
          <div className="meeting__title">
            Новая встреча
          <Link to="/" className="meeting__close">
              <img src={close} alt="close" />
            </Link>
          </div>

          <div className="meeting__topic">
            Тема
          <input
              placeholder="О чём будете говорить?"
              value={this.state.topicValue}
              onChange={this.handleChangeTopic('topicValue')}
            />
          </div>

          <DateTime {...this.props} />
          <Members
            members={members}
            users={users}
            handleDeselectMember={this.handleDeselectMember}
            handleSelectMember={this.handleSelectMember}
          />
          <RecommendedBlock roomList={roomList} />
        </div>
        <Footer onSave={this.onSave} />
      </div>
    )
  }
};

export default compose(
  gqlLodash(usersQuery, { name: 'usersQuery' }),
)(Meeting);
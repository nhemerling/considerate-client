import React, { Component } from 'react';
import FriendList from '../../components/FriendList/FriendList';
import './HomePage.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <FriendList />
      </div>
    );
  }
}

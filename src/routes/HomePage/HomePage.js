import React, { Component } from 'react';
import FriendCard from '../../components/FriendCard/FriendCard';
import './HomePage.css';
import FRIENDS from '../../store';

export default class HomePage extends Component {
  renderFriends() {
    const filteredFriends = FRIENDS.filter(
      (friend) =>
        new Date(friend.date) > new Date() &&
        new Date(friend.date - 10000000000) <= new Date()
    );

    return filteredFriends.map((friend) => (
      <FriendCard key={friend.id} friend={friend} />
    ));
  }

  render() {
    return <div className="HomePage">{this.renderFriends()}</div>;
  }
}

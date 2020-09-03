import React, { Component } from 'react';

export default class FriendCard extends Component {
  render() {
    const { friend } = this.props;

    return (
      <section className="FriendCard">
        <h2 className="FriendCard__name">{friend.friend_name}</h2>
        <h3 className="FriendCard__occasion">{friend.occasion}</h3>
        <p className="FriendCard__occasion-date">{friend.occasion_date}</p>
      </section>
    );
  }
}

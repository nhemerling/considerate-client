import React, { Component } from 'react';
import FriendCard from '../../components/FriendCard/FriendCard';
import FriendApiService from '../../services/friend-api-service';
import ConsiderateContext from '../../context/ConsiderateContext';
import './HomePage.css';

export default class HomePage extends Component {
  static contextType = ConsiderateContext;

  componentDidMount() {
    FriendApiService.getFriends()
      .then(this.context.setFriendList)
      .catch(this.context.setError);
  }

  renderFriends() {
    const { friendList = [] } = this.context;
    const d = new Date();
    const filteredFriendList = friendList.filter(
      // filters friends to hide past occasions, and only show occasions in the next month
      (friend) =>
        new Date(friend.occasion_date) > d &&
        new Date(friend.occasion_date) < d.setMonth(d.getMonth() + 1)
    );
    return filteredFriendList.map((friend) => (
      <FriendCard key={friend.id} friend={friend} />
    ));
  }

  render() {
    return <section className="HomePage">{this.renderFriends()}</section>;
  }
}

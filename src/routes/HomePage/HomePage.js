import React, { Component } from 'react';
import FriendCard from '../../components/FriendCard/FriendCard';
import FriendApiService from '../../services/friend-api-service';
import ConsiderateContext from '../../context/ConsiderateContext';
import moment from 'moment';
import './HomePage.css';

export default class HomePage extends Component {
  static contextType = ConsiderateContext;

  componentDidMount() {
    FriendApiService.getFriends()
      .then(this.context.setFriendList)
      .catch(this.context.setError);
  }

  renderFilteredFriends() {
    const { friendList = [] } = this.context;

    const filteredFriendList = friendList.filter(
      // NEEDS FIX: filters friends to hide past occasions, and only show occasions in the next month
      (friend) =>
        moment(friend.occasion_date).month() < moment().month() + 1 &&
        moment() < moment(friend.occasion_date)
    );
    return filteredFriendList.map((friend) => (
      <FriendCard key={friend.id} friend={friend} />
    ));
  }

  render() {
    return (
      <section className="HomePage">{this.renderFilteredFriends()}</section>
    );
  }
}

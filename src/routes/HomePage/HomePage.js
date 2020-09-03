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
      // filters so that events in the past don't show
      (friend) => new Date(friend.occasion_date) > d
      // TODO: Having trouble finding the math for next month.....
      // friend.occasion_date < Math.floor(d.setDate(d.getDate() - 7) / 1000)
    );
    return filteredFriendList.map((friend) => (
      <FriendCard key={friend.id} friend={friend} />
    ));
  }

  render() {
    return <section className="HomePage">{this.renderFriends()}</section>;
  }
}

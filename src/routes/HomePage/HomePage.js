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

  renderFilteredFriends() {
    const { friendList = [] } = this.context;
    let d = new Date();
    console.log('today: ', d);
    let monthFromToday = d.setMonth(d.getMonth() + 1);
    console.log('month from today: ', new Date(monthFromToday));

    console.log('occasion: ', new Date('2020-10-02T00:00:00.000Z'));

    console.log(
      'this is a future event: ',
      new Date('2020-10-02T00:00:00.000Z') > d
    );

    console.log(
      'this is an upcoming event: ',
      new Date('2020-10-02T00:00:00.000Z') < new Date(monthFromToday)
    );

    const filteredFriendList = friendList.filter(
      // NEEDS FIX: filters friends to hide past occasions, and only show occasions in the next month
      (friend) => d < new Date(friend.occasion_date) < new Date(monthFromToday)
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

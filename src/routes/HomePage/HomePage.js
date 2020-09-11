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

  compare(a, b) {
    const dateA = a.occasion_date;
    const dateB = b.occasion_date;

    let comparison = 0;
    if (dateA > dateB) {
      comparison = 1;
    } else if (dateA < dateB) {
      comparison = -1;
    }
    return comparison;
  }

  // sorts friends in chronological order of occasions then
  // filters friends to not show past and only show occasions in the next month
  renderFilteredFriends() {
    const { friendList = [] } = this.context;
    const sortedFriends = friendList.sort(this.compare);
    const filteredFriendList = sortedFriends.filter(
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
      <section className="HomePage">
        <h2>Upcoming Occasions</h2>
        <div className="HomePage__friends">{this.renderFilteredFriends()}</div>
      </section>
    );
  }
}

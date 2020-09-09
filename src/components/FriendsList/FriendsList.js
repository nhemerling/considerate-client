import React, { Component } from 'react';
import FriendCard from '../FriendCard/FriendCard';
import FriendApiService from '../../services/friend-api-service';
import moment from 'moment';

export default class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendList: [],
      error: null,
    };
  }

  setFriendList = (friendList) => {
    this.setState({ friendList });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  componentDidMount() {
    FriendApiService.getFriends().then(this.setFriendList).catch(this.setError);
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

  renderHomePageFriends() {
    const { friendList = [] } = this.state;
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

  renderFriendsPageFriends() {
    const { friendList = [] } = this.state;
    const sortedFriends = friendList.sort(this.compare);
    const filteredFriends = sortedFriends.filter((friend) => {
      return (
        friend.friend_name
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return filteredFriends.map((friend) => (
      <FriendCard key={friend.id} friend={friend} />
    ));
  }

  render() {
    return (
      <div className="FriendsList">
        {this.props.pathname === '/home'
          ? this.renderHomePageFriends()
          : this.renderFriendsPageFriends()}
      </div>
    );
  }
}

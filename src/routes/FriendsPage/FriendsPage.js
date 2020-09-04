import React, { Component } from 'react';
import FriendCard from '../../components/FriendCard/FriendCard';
import FriendApiService from '../../services/friend-api-service';
import ConsiderateContext from '../../context/ConsiderateContext';
import './FriendsPage.css';

export default class FriendsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      error: null,
    };
  }
  static contextType = ConsiderateContext;

  componentDidMount() {
    FriendApiService.getFriends()
      .then(this.context.setFriendList)
      .catch(this.context.setError);
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value,
    });
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

  renderFilteredFriends() {
    const { friendList = [] } = this.context;
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
      <section className="HomePage">
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={(e) => this.updateSearch(e)}
        ></input>
        {this.renderFilteredFriends()}
      </section>
    );
  }
}

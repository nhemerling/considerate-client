import React, { Component } from 'react';
import FriendApiService from '../../services/friend-api-service';

export default class AddFriendForm extends Component {
  static defaultProps = {
    onAddFriendSuccess: () => {},
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { friend_name, occasion, occasion_date } = ev.target;
    const newFriend = {
      friend_name: friend_name.value,
      occasion: occasion.value,
      occasion_date: occasion_date.value,
    };

    this.setState({ error: null });

    FriendApiService.postFriend(newFriend)
      .then((friend) => {
        friend_name.value = '';
        occasion.value = '';
        occasion_date.value = '';
        this.props.onAddFriendSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="AddFriendForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="friend_name">
          <label htmlFor="AddFriendForm__friend_name">Friend name</label>
          <input
            name="friend_name"
            type="text"
            required
            id="AddFriendForm__friend_name"
          ></input>
        </div>
        <div className="occasion">
          <label htmlFor="AddFriendForm__occasion">Occasion</label>
          <input
            name="occasion"
            type="text"
            required
            id="AddFriendForm__occasion"
          ></input>
        </div>
        <div className="occasion_date">
          <label htmlFor="AddFriendForm__occasion_date">Occasion Date</label>
          <input
            name="occasion_date"
            type="date"
            required
            id="AddFriendForm__occasion_date"
          ></input>
        </div>
        <button type="reset">Reset</button>
        <button type="submit">Add</button>
      </form>
    );
  }
}

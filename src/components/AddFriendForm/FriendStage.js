import React, { Component } from 'react';
import FriendApiService from '../../services/friend-api-service';

export default class FriendStage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      friend_name: { value: '', touched: false },
      occasion: { value: '', touched: false },
      occasion_date: { value: '', touched: false },
    };
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { friend_name, occasion, occasion_date } = this.state;
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
        this.props.onFriendStageSuccess(friend);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  updateFriendName(friend_name) {
    this.setState({
      friend_name: { value: friend_name, touched: true },
    });
  }

  updateOccasion(occasion) {
    this.setState({
      occasion: { value: occasion, touched: true },
    });
  }

  updateOccasionDate(occasion_date) {
    this.setState({
      occasion_date: { value: occasion_date, touched: true },
    });
  }

  render() {
    const { error } = this.state;
    return (
      <form
        className="AddFriendForm__friend-stage"
        onSubmit={this.handleSubmit}
      >
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="friend_name">
          <label htmlFor="AddFriendForm__friend_name">Friend name</label>
          <input
            name="friend_name"
            type="text"
            required
            id="AddFriendForm__friend_name"
            onChange={(e) => this.updateFriendName(e.target.value)}
          ></input>
        </div>
        <div className="occasion">
          <label htmlFor="AddFriendForm__occasion">Occasion</label>
          <input
            name="occasion"
            type="text"
            required
            id="AddFriendForm__occasion"
            onChange={(e) => this.updateOccasion(e.target.value)}
          ></input>
        </div>
        <div className="occasion_date">
          <label htmlFor="AddFriendForm__occasion_date">Occasion Date</label>
          <input
            name="occasion_date"
            type="date"
            required
            id="AddFriendForm__occasion_date"
            onChange={(e) => this.updateOccasionDate(e.target.value)}
          ></input>
        </div>
        <button type="reset">Reset</button>
        <button type="submit">Add</button>
      </form>
    );
  }
}

import React, { Component } from 'react';
import FriendApiService from '../../services/friend-api-service';
import moment from 'moment';
import './EditFriendForm.css';

export default class EditFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend_name: '',
      occasion: '',
      occasion_date: '',
      error: null,
    };
  }

  componentDidMount() {
    const friendId = this.props.friendId;
    FriendApiService.getFriendById(friendId)
      .then((friend) => {
        this.setState({
          friend_name: friend.friend_name,
          occasion: friend.occasion,
          occasion_date: friend.occasion_date,
          error: null,
        });
      })
      .catch((res) => this.setState({ error: res.error }));
  }

  handleChange = (target) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { friend_name, occasion, occasion_date } = this.state;
    const updateFriend = {
      friend_name: friend_name,
      occasion: occasion,
      occasion_date: occasion_date,
    };

    this.setState({ error: null });

    FriendApiService.updateFriend(this.props.friendId, updateFriend)
      .then(this.props.onEditFriendSuccess())
      .catch((res) => this.setState({ error: res.error }));
  };

  render() {
    const { error, friend_name, occasion, occasion_date } = this.state;
    return (
      <section className="EditFriendForm">
        <form className="EditFriendForm" onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div className="friend_name">
            <label htmlFor="EditFriendForm__friend_name">Friend name</label>
            <input
              name="friend_name"
              type="text"
              required
              id="EditFriendForm__friend_name"
              value={friend_name}
              onChange={(e) => this.handleChange(e.target)}
            ></input>
          </div>
          <div className="occasion">
            <label htmlFor="EditFriendForm__occasion">Occasion</label>
            <input
              name="occasion"
              type="text"
              required
              id="EditFriendForm__occasion"
              value={occasion}
              onChange={(e) => this.handleChange(e.target)}
            ></input>
          </div>
          <div className="occasion_date">
            <label htmlFor="EditFriendForm__occasion_date">Occasion Date</label>
            <input
              name="occasion_date"
              type="date"
              required
              id="EditFriendForm__occasion_date"
              value={moment(occasion_date).format('YYYY-MM-DD')}
              onChange={(e) => this.handleChange(e.target)}
            ></input>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </section>
    );
  }
}

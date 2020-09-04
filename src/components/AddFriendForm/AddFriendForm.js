import React, { Component } from 'react';
import FriendApiService from '../../services/friend-api-service';

export default class AddFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend_name: '',
      occasion: '',
      occasion_date: '',
      like1: '',
      like2: '',
      like3: '',
      error: null,
    };
  }

  handleChange = (target) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      friend_name,
      occasion,
      occasion_date,
      like1,
      like2,
      like3,
    } = this.state;
    const newFriend = {
      friend_name: friend_name,
      occasion: occasion,
      occasion_date: occasion_date,
    };
    const newLikes = {
      likes: [{ like_name: like1 }, { like_name: like2 }, { like_name: like3 }],
    };

    this.setState({ error: null });

    FriendApiService.postFriend(newFriend)
      .then((friend) => {
        return FriendApiService.postLikes(newLikes, friend.id);
      })
      .then(this.props.onAddFriendSuccess())
      .catch((res) => this.setState({ error: res.error }));
  };

  render() {
    const { error } = this.state;
    return (
      <section className="AddFriendForm">
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
              onChange={(e) => this.handleChange(e.target)}
            ></input>
          </div>
          <div className="occasion">
            <label htmlFor="AddFriendForm__occasion">Occasion</label>
            <input
              name="occasion"
              type="text"
              required
              id="AddFriendForm__occasion"
              onChange={(e) => this.handleChange(e.target)}
            ></input>
          </div>
          <div className="occasion_date">
            <label htmlFor="AddFriendForm__occasion_date">Occasion Date</label>
            <input
              name="occasion_date"
              type="date"
              required
              id="AddFriendForm__occasion_date"
              onChange={(e) => this.handleChange(e.target)}
            ></input>
          </div>
          <div className="friend_likes">
            <div className="friend_like1">
              <label htmlFor="AddFriendForm__like1">Like 1</label>
              <input
                name="like1"
                type="text"
                id="AddFriendForm__like1"
                onChange={(e) => this.handleChange(e.target)}
              ></input>
            </div>
            <div className="friend_like2">
              <label htmlFor="AddFriendForm__like1">Like 2</label>
              <input
                name="like2"
                type="text"
                id="AddFriendForm__like2"
                onChange={(e) => this.handleChange(e.target)}
              ></input>
            </div>
            <div className="friend_like3">
              <label htmlFor="AddFriendForm__like1">Like 3</label>
              <input
                name="like3"
                type="text"
                id="AddFriendForm__like3"
                onChange={(e) => this.handleChange(e.target)}
              ></input>
            </div>
          </div>
          <button type="reset">Reset</button>
          <button type="submit">Add</button>
        </form>
      </section>
    );
  }
}

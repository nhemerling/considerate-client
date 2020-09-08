import React, { Component } from 'react';
import FriendApiService from '../../services/friend-api-service';

export default class AddFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend_name: '',
      occasion: '',
      occasion_date: '',
      error: null,
      likes: [{ like_name: '', id: 1 }],
    };
  }

  handleChange = (target) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleLikeChange = (target) => {
    console.log(target.name);
    const likes = [...this.state.likes];
    const currentIndex = likes.findIndex(
      (like) => like.id === Number(target.name)
    );
    console.log(currentIndex);
    const likeChanged = { id: likes[currentIndex].id, like_name: target.value };
    likes[currentIndex] = likeChanged;
    console.log(likeChanged);
    //DOES NOT WORK NEED FIX !!!!!!!!
    this.setState({
      likes,
    });
  };

  handleAddLikeField() {
    const likes = this.state.likes;
    const lastLike = likes[likes.length - 1];
    const nextLike = { id: lastLike.id + 1 };
    this.setState({
      likes: [...likes, nextLike],
    });
  }

  handleReset() {
    this.setState({
      friend_name: '',
      occasion: '',
      occasion_date: '',
      error: null,
      likes: [{ like_name: '', id: 1 }],
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { friend_name, occasion, occasion_date, likes } = this.state;
    const newFriend = {
      friend_name: friend_name,
      occasion: occasion,
      occasion_date: occasion_date,
    };

    this.setState({ error: null });

    FriendApiService.postFriend(newFriend)
      .then((friend) => {
        return FriendApiService.postLikes({ likes }, friend.id);
      })
      .then(this.props.onAddFriendSuccess())
      .catch((res) => this.setState({ error: res.error }));
  };

  renderLikeField(index) {
    return (
      <div className={`friend_like${index}`} key={index}>
        <label htmlFor={`AddFriendForm__like${index}`}>Like {index}</label>
        <input
          name={index}
          type="text"
          id={`AddFriendForm__like${index}`}
          onChange={(e) => this.handleLikeChange(e.target)}
        ></input>
      </div>
    );
  }

  render() {
    const { error } = this.state;
    return (
      <section className="AddFriendForm">
        <form className="AddFriendForm" onSubmit={this.handleSubmit}>
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
            {this.state.likes.map((like) => {
              return this.renderLikeField(like.id);
            })}
            <button type="button" onClick={() => this.handleAddLikeField()}>
              + Add Like
            </button>
          </div>
          <button type="reset" onClick={() => this.handleReset()}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

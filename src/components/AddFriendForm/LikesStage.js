import React, { Component } from 'react';
import FriendApiService from '../../services/friend-api-service';

export default class LikesStage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      like1_name: { value: '', touched: false },
      like2_name: { value: '', touched: false },
      like3_name: { value: '', touched: false },
    };
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { like1_name, like2_name, like3_name } = this.state;
    const newLikes = {
      likes: [
        { like_name: like1_name.value },
        { like_name: like2_name.value },
        { like_name: like3_name.value },
      ],
    };
    const friendId = this.props.friend.id;
    this.setState({ error: null });

    FriendApiService.postLikes(newLikes, friendId)
      .then((likes) => {
        like1_name.value = '';
        like2_name.value = '';
        like3_name.value = '';
        this.props.onLikesStageSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  updateLike1(like1) {
    this.setState({
      like1_name: { value: like1, touched: true },
    });
  }

  updateLike2(like2) {
    this.setState({
      like2_name: { value: like2, touched: true },
    });
  }

  updateLike3(like3) {
    this.setState({
      like3_name: { value: like3, touched: true },
    });
  }

  render() {
    const { error } = this.state;
    return (
      <form className="AddFriendForm__likes-stage" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="friend_likes">
          <div className="friend_like1">
            <label htmlFor="AddFriendForm__like1">Like</label>
            <input
              name="like1"
              type="text"
              id="AddFriendForm__like1"
              onChange={(e) => this.updateLike1(e.target.value)}
            ></input>
          </div>
          <div className="friend_like2">
            <label htmlFor="AddFriendForm__like1">Like</label>
            <input
              name="like2"
              type="text"
              id="AddFriendForm__like2"
              onChange={(e) => this.updateLike2(e.target.value)}
            ></input>
          </div>
          <div className="friend_like3">
            <label htmlFor="AddFriendForm__like1">Like</label>
            <input
              name="like3"
              type="text"
              id="AddFriendForm__like3"
              onChange={(e) => this.updateLike3(e.target.value)}
            ></input>
          </div>
        </div>
        <button type="reset">Reset</button>
        <button type="submit">Add</button>
      </form>
    );
  }
}

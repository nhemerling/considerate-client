import React, { Component } from 'react';
import FriendApiService from '../../services/friend-api-service';
import moment from 'moment';
import ConsiderateContext from '../../context/ConsiderateContext';
import './FriendCard.css';

export default class FriendCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendLikes: [],
    };
  }

  static contextType = ConsiderateContext;

  componentDidMount() {
    FriendApiService.getFriendLikes(this.props.friend.id).then((likes) => {
      this.setState({
        friendLikes: likes,
      });
    });
  }

  deleteFriend(friendId) {
    FriendApiService.deleteFriend(friendId).then((res) => {
      console.log('deleted');
      FriendApiService.getFriends()
        .then((res) => {
          //console.log(res);
          console.log(this.context);
          this.context.setFriendList(res);
        })
        .catch(this.context.setError);
    });
  }

  render() {
    const { friend } = this.props;
    const { friendLikes = [] } = this.state;
    return (
      <section className="FriendCard">
        <h2 className="FriendCard__name">{friend.friend_name}</h2>
        <h3 className="FriendCard__occasion-date">
          {moment(friend.occasion_date).format('MMMM Do YYYY')}
        </h3>
        <h4 className="FriendCard__occasion">{friend.occasion}</h4>
        <ul className="FriendCard__likes">
          {friendLikes.map((like) => {
            return (
              <li key={like.id}>
                <p>{like.like_name}</p>
              </li>
            );
          })}
        </ul>
        <div className="FriendCard__buttons">
          <button type="button" onClick={() => this.deleteFriend(friend.id)}>
            Delete
          </button>
          <button type="button" onClick={() => this.editFriend(friend.id)}>
            Edit
          </button>
        </div>
      </section>
    );
  }
}

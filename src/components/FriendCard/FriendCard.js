import React, { Component } from 'react';
import FriendApiService from '../../services/friend-api-service';
import moment from 'moment';
import './FriendCard.css';

export default class FriendCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendLikes: [],
    };
  }

  componentDidMount() {
    FriendApiService.getFriendLikes(this.props.friend.id).then((likes) => {
      this.setState({
        friendLikes: likes,
      });
    });
  }

  render() {
    const { friend } = this.props;
    const { friendLikes = [] } = this.state;
    return (
      <section className="FriendCard">
        <h2 className="FriendCard__name">{friend.friend_name}</h2>
        <h3 className="FriendCard__occasion">{friend.occasion}</h3>
        <p className="FriendCard__occasion-date">
          {moment(friend.occasion_date).format('MMMM Do YYYY')}
        </p>
        <ul className="FriendCard__likes">
          {friendLikes.map((like) => {
            return (
              <li key={like.id}>
                <p>{like.like_name}</p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

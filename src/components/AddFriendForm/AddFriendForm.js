import React, { Component } from 'react';
import FriendStage from './FriendStage';
import LikesStage from './LikesStage';

export default class AddFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {},
    };
  }

  handleFriendStageSuccess = (friend) => {
    this.setState({
      friend,
    });
  };

  handleLikesStageSuccess = (likes) => {
    this.props.onAddFriendSuccess();
  };

  render() {
    const { friend } = this.state;
    return (
      <section className="AddFriendForm">
        <FriendStage onFriendStageSuccess={this.handleFriendStageSuccess} />
        <LikesStage
          friend={friend}
          onLikesStageSuccess={this.handleLikesStageSuccess}
        />
      </section>
    );
  }
}

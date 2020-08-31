import React, { Component } from 'react';

export default class FriendCard extends Component {
  renderNotFlippedCard() {
    return (
      <div className="FriendCard__not-flipped" key={this.props.friend.id}>
        <div className="FriendCard__name">{this.props.friend.name}</div>
        <div className="FriendCard__occasion">{this.props.friend.occasion}</div>
        <div className="FriendCard__date">
          {this.props.friend.date.toString()}
        </div>
      </div>
    );
  }

  renderFlippedCard() {
    return (
      <div className="FriendCard__flipped" key={this.props.friend.id}>
        <div className="FriendCard__name">{this.props.friend.name}</div>
        <div className="FriendCard__loves">
          <ul>
            {this.props.friend.loves.map((love) => {
              return <li>{love}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        {this.props.friend.flipped
          ? this.renderFlippedCard()
          : this.renderNotFlippedCard()}
      </>
    );
  }
}

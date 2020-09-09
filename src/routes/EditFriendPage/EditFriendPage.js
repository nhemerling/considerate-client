import React, { Component } from 'react';
import EditFriendForm from '../../components/EditFriendForm/EditFriendForm';

export default class EditFriendPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleEditFriendSuccess = (friend) => {
    const { history } = this.props;
    history.push('/home');
  };

  render() {
    return (
      <section className="EditFriendPage">
        <h2>Edit Friend</h2>
        <EditFriendForm
          onEditFriendSuccess={this.handleEditFriendSuccess}
          friendId={this.props.match.params.friendId}
        />
      </section>
    );
  }
}

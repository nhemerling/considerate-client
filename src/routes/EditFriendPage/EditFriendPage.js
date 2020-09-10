import React, { Component } from 'react';
import EditFriendForm from '../../components/EditFriendForm/EditFriendForm';
import FriendApiService from '../../services/friend-api-service';
import ConsiderateContext from '../../context/ConsiderateContext';

export default class EditFriendPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  static contextType = ConsiderateContext;

  handleEditFriendSuccess = (friend) => {
    FriendApiService.getFriends()
      .then((res) => {
        this.context.setFriendList(res);
        const { history } = this.props;
        history.push('/home');
      })
      .catch(this.context.setError);
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

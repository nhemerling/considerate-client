import React, { Component } from 'react';
import AddFriendForm from '../../components/AddFriendForm/AddFriendForm';
import FriendApiService from '../../services/friend-api-service';
import ConsiderateContext from '../../context/ConsiderateContext';

export default class AddFriendPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  static contextType = ConsiderateContext;

  handleAddFriendSuccess = (friend) => {
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
      <section className="AddFriendPage">
        <h2>Add Friend</h2>
        <AddFriendForm onAddFriendSuccess={this.handleAddFriendSuccess} />
      </section>
    );
  }
}

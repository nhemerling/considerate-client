import React, { Component } from 'react';
import AddFriendForm from '../../components/AddFriendForm/AddFriendForm';

export default class AddFriendPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleAddFriendSuccess = (friend) => {
    const { history } = this.props;
    history.push('/home');
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

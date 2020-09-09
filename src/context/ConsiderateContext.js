import React, { Component } from 'react';

const ConsiderateContext = React.createContext({
  friendList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setFriendList: () => {},
});
export default ConsiderateContext;

export class ConsiderateProvider extends Component {
  state = {
    friendList: [],
    error: null,
  };

  setFriendList = (friendList) => {
    console.log('state friend list: ', this.state.friendList);
    console.log('friend list: ', friendList);
    this.setState({ friendList });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      friendList: this.state.friendList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setFriendList: this.setFriendList,
    };
    return (
      <ConsiderateContext.Provider value={value}>
        {this.props.children}
      </ConsiderateContext.Provider>
    );
  }
}

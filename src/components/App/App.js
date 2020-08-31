import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../../routes/HomePage/HomePage';
import FriendsPage from '../../routes/FriendsPage/FriendsPage';
import AddFriendPage from '../../routes/AddFriendPage/AddFriendPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route path={'/friends'} component={FriendsPage} />
            <Route path={'/add-friend'} component={AddFriendPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

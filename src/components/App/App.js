import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import HomePage from '../../routes/HomePage/HomePage';
import FriendsPage from '../../routes/FriendsPage/FriendsPage';
import AddFriendPage from '../../routes/AddFriendPage/AddFriendPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          <Switch>
            <PrivateRoute exact path={'/'} component={HomePage} />
            <PrivateRoute path={'/friends'} component={FriendsPage} />
            <PrivateRoute path={'/add-friend'} component={AddFriendPage} />
            <PublicOnlyRoute path={'/login'} component={LoginPage} />
            <PublicOnlyRoute path={'/register'} component={RegistrationPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

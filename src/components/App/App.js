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
import LandingPage from '../../routes/LandingPage/LandingPage';
import EditFriendPage from '../../routes/EditFriendPage/EditFriendPage';
import './App.css';

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          {this.state.hasError && <p className="red">There was an error.</p>}
          <Switch>
            <PrivateRoute path={'/home'} component={HomePage} />
            <PrivateRoute path={'/friends'} component={FriendsPage} />
            <PrivateRoute path={'/add-friend'} component={AddFriendPage} />
            <PrivateRoute
              path={'/edit-friend/:friendId'}
              component={EditFriendPage}
            />
            <PublicOnlyRoute path={'/login'} component={LoginPage} />
            <PublicOnlyRoute path={'/register'} component={RegistrationPage} />
            <Route exact path={'/'} component={LandingPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/friends">Friends</NavLink>
        <NavLink to="/add-friend">Add Friend</NavLink>
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    );
  }

  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/">Considerate</Link>
        </h1>
        <span className="Header__tagline">The perfect gift every time.</span>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/">Considerate</Link>
        </h1>
        <span className="Header__tagline">The perfect gift every time.</span>
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/add-friend">Add Friend</Link>
      </nav>
    );
  }
}

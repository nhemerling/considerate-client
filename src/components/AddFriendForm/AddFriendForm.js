import React, { Component } from 'react';

export default class AddFriendForm extends Component {
  render() {
    return (
      <form className="AddFriendForm">
        <div className="form-section">
          <label htmlFor="friend-name">Friend name</label>
          <input type="text" name="friend-name" placeholder="John" required />
        </div>
        <div className="form-section">
          <label htmlFor="friend-loves">Friend Loves</label>
          <textarea name="friend-loves" rows="15" required></textarea>
        </div>
        <div className="form-section">
          <label htmlFor="friend-occasion">Occasion</label>
          <input
            type="text"
            name="friend-occasion"
            placeholder="Birthday"
            required
          />
        </div>
        <div className="form-section">
          <label className="friend-occasion-header">Date of Occasion</label>
          <input type="date" name="date" />
        </div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}

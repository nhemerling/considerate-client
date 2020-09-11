import React, { Component } from 'react';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <section className="LandingPage__section">
          <h1>How did you remember?!</h1>
        </section>

        <section className="LandingPage__section">
          <header>
            <h3>Demo Considerate</h3>
          </header>
          <p>If you'd like to demo Considerate, log in with:</p>
          <ul>
            <li>
              username: <b>demo</b>
            </li>
            <li>
              password: <b>D33mm0!!</b>
            </li>
          </ul>
        </section>

        <br />

        <section className="LandingPage__section">
          <header>
            <h3>Give the perfect gift, every time.</h3>
          </header>
          <p>
            Considerate helps you keep track of the things your friends like and
            of the occasions when you'd like to give them the perfect gift.
          </p>
          <p>You can be the thoughtful friend you've always meant to be.</p>
        </section>

        <br />

        <section className="LandingPage__section">
          <header>
            <h3>Keep track of what your friends like.</h3>
          </header>
          <p>
            The key to giving the perfect gift is remembering what your friends
            like.
          </p>
          <p>
            Considerate provides you with an intuitive interface that helps you
            keep track of all the things your friends have told you they like.
          </p>
        </section>

        <br />

        <section className="LandingPage__section">
          <header>
            <h3>We'll remind you.</h3>
          </header>
          <p>
            When you sign in, the home page will show you your friends with
            upcoming special occassions.
          </p>
          <p>That way you'll never miss another anniversay.</p>
        </section>

        <br />
      </div>
    );
  }
}

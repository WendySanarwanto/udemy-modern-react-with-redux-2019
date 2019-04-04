import React, { Component } from 'react';

const STREAMY_GOOGLE_OAUTH_CLIENT_ID = process.env.REACT_APP_STREAMY_GOOGLE_OAUTH_CLIENT_ID;

// console.log(`STREAMY_GOOGLE_OAUTH_CLIENT_ID: ${STREAMY_GOOGLE_OAUTH_CLIENT_ID}`);

class GoogleAuth extends Component {
  state = { isSignedIn: null};
  // Initialise Google OAuth API in componentDidMount
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: STREAMY_GOOGLE_OAUTH_CLIENT_ID,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  onSignIn = () => {
    this.auth.signIn();
  }

  onSignOut = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui button google red" onClick={ this.onSignOut }>
          <i className="google icon"/>
          Sign Out
        </button>
      );
    }

    return (
      <button className="ui red google button" onClick={ this.onSignIn }>
        <i className="google icon"/>
        Sign in with Google
      </button>
    );
  }

  render() {
    return (
      <div>{ this.renderAuthButton() }</div>
    );
  }
}

export default GoogleAuth;

import React, { Component } from 'react';

const STREAMY_GOOGLE_OAUTH_CLIENT_ID = process.env.REACT_APP_STREAMY_GOOGLE_OAUTH_CLIENT_ID;

console.log(`STREAMY_GOOGLE_OAUTH_CLIENT_ID: ${STREAMY_GOOGLE_OAUTH_CLIENT_ID}`);

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: STREAMY_GOOGLE_OAUTH_CLIENT_ID,
        scope: 'email'
      });
    });
  }

  render() {
    return (
      <div>Google Auth</div>
    );
  }
}

export default GoogleAuth;

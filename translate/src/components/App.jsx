import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import UserCreate from './UserCreate';

export default class App extends Component {
  state = { language: 'english' };

  onLanguageChanged = language => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          <span>Select a language: </span>
          <i className="flag us" style={ { cursor: 'pointer' } } onClick={ () => this.onLanguageChanged('english') } />
          <i className="flag nl" style={ { cursor: 'pointer' } } onClick={ () => this.onLanguageChanged('dutch') } />
        </div>
        <ColorContext.Provider value = "red">
          <LanguageContext.Provider value={ this.state.language }>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}
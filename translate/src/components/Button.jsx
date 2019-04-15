import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

export default class Button extends Component {
  // When using Consumer, contextType should not be declared
  // static contextType = LanguageContext; 
  renderButtonLabel(value) {
    return value === 'english' ? 'Submit' : 'Voorlegen';
  }

  render() {
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          { (language) => this.renderButtonLabel(language) }
        </LanguageContext.Consumer>
      </button>
    );
  }
}
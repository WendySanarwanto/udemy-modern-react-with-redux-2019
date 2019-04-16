import React, { Component } from 'react';

import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

export default class Button extends Component {
  // When using Consumer, contextType should not be declared
  // static contextType = LanguageContext; 
  renderButtonLabel(language) {
    return language === 'english' ? 'Submit' : 'Voorlegen';
  }

  renderButton = (color) => {
    return (
      <button className={ `ui button ${color}` }>
        <LanguageContext.Consumer>
          { ({ language }) => this.renderButtonLabel(language) }
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <ColorContext.Consumer>
        { color => this.renderButton(color) }
      </ColorContext.Consumer>
    );
  }
}
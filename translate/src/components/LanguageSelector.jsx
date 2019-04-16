import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(`[debug]<LanguageSelector@render> this.context: \n`, this.context);
    return (
      <div>
        <span>Select a language: </span>
        <i className="flag us" style={ { cursor: 'pointer' } } onClick={ () => this.context.onLanguageChange('english') } />
        <i className="flag nl" style={ { cursor: 'pointer' } } onClick={ () => this.context.onLanguageChange('dutch') } />
      </div>
    )
  }
}

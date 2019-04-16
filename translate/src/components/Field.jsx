import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

export default class Field extends Component {
  state = { title: 'Name' };
  static contextType = LanguageContext;

  onTextChanged = (e) => {
    console.log(`[debug]<Field.jsx> - text: ${e.target.value}`);
  }

  render() {
    console.log(`[debug]<Field.jsx@render> - this.context.language: ${this.context.language}`);
    const title = this.context.language === 'english' ? 'Name' : 'Naam';
    return (
      <div className="ui field">
        <label>{ title }</label>
        <input type="text" onChange={ this.onTextChanged }/>
      </div>
    );
  }
}
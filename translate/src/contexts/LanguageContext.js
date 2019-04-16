import React, { Component } from 'react';

const Context = React.createContext('english'); // Default value = 'english'
console.log(`LanguageContext: \n`, Context); 

export class LanguageStore extends Component {
  state = { language: 'english' }

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

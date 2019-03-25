import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplayComponent from './SeasonDisplay';
import SpinnerComponent from './Spinner';

class App extends React.Component {
  // An alternate way to initialise state.
  state = { lat: null, long: null, errorMessage: "" };

  // constructor(props) {
  //   super(props);

  //   // THIS IS THE ONLY TIME we do direct assignment
  //   this.state = { lat: null, long: null, errorMessage: "" };
  // }  

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition (
      // Update state object by calling setState method. It will also rerender the component (re-call render method)
      position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
      err => { 
        this.setState({ errorMessage: err.message });
        console.log("[ERROR] - <App> Getting current user's position is failing. Details: \n", err); 
      }
    );    
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat && !this.state.long) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplayComponent lat={ this.state.lat } />;
    }

    return <SpinnerComponent />;
  }

  // React says we have to define render method !
  render() {
    return (
      <div className="border red">{ this.renderContent() }</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
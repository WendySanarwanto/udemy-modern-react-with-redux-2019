// Import te react & react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'Click Me!';
}

// Create a react component
const App = () => {
  const buttonText = { text: 'Click Me!' }; //[10, 20] //['Hi', 'There'];//123456; //'Click Me!';
  const style = { backgroundColor: 'blue', color: 'white' };
  const labelText = 'Enter name:';

  return <div>
    <label className="label" htmlFor="name">{ labelText }</label>
    <input id="name" type="text"/>
    <button style={style}>{ buttonText.text }</button>
  </div>
};

// Take the react component and show it on the screen.
ReactDOM.render(
  <App/>, 
  document.querySelector("#root")
);
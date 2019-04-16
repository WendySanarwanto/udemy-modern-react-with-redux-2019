import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplayComponent from './SeasonDisplay';
import SpinnerComponent from './Spinner';

import useLocation from './useLocation';

const App = () => {
  const { lat, errorMessage } =useLocation();

  let content = null;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplayComponent lat={ lat } />;
  } else {
    content = <SpinnerComponent message="Please accept location request"/>;
  }

  return (
    <div className="border red">{ content }</div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
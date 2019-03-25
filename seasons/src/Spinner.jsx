import React from 'react';

const SpinnerComponent = (props) => {
  const {message} = props;
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{ message }</div>
    </div>
  );
};

SpinnerComponent.defaultProps = {
  message: 'Loading ...'
}

export default SpinnerComponent;

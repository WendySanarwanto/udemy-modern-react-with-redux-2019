import { useState, useEffect } from 'react';

const UseLocation = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchCurrentPosition = () => {
    window.navigator.geolocation.getCurrentPosition (
      // Update state object by calling setState method. It will also rerender the component (re-call render method)
      position => setLat(position.coords.latitude),
      err => { 
        setErrorMessage(err.message);
        console.log("[ERROR] - <App> Getting current user's position is failing. Details: \n", err); 
      }
    ); 
  };

  useEffect(() => fetchCurrentPosition(), 
    [lat, errorMessage]);

  return { lat, errorMessage };
};

export default UseLocation;
import React from 'react';

import SongDetail from './SongDetail';
import SongList from './SongList';

const App = () => {
  return ( 
    <div className="ui container grid">
      <div className="ui row">
        <div className="eight wide column">
          <SongList />
        </div>
        <div className="eight wide column">
          <SongDetail />
        </div>
      </div>
    </div> 
  );
}

export default App;
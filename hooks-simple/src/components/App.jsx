import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UsersList from './UsersList';

const App = () => {
  const [resource, setResource] = useState('posts');
  return (
    <div className="ui container">
      <div>
        <button style={ { cursor: 'pointer' } } 
                onClick={ () => setResource('posts') }>
          Posts
        </button>
        <button style={ { cursor: 'pointer' } } 
                onClick={ () => setResource('todos') }>
          Todos
        </button>
      </div>
      <ResourceList resource={ resource } />
      <hr/>
      <UsersList />
    </div>
  );
};
export default App;

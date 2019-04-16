import React from 'react';

import useResources from '../hooks/UseResources';

const UsersList = () => {
  const resources = 'users';
  const users = useResources(resources);
  return (
    <ul>{
      users.map(_user => <li key={ _user.id }>{ _user.name }</li>)
    }</ul>
  );
}

export default UsersList;

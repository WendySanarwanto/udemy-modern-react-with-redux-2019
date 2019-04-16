import React from 'react';

import useResources from '../hooks/UseResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul>{ 
      resources.map(_resource => 
        <li key={_resource.id}>{_resource.title}</li>
      )}
    </ul>
  );
}
export default ResourceList;

import { useEffect, useState } from 'react';
import axios from 'axios';

const JSONPLACEHOLDER_URL = 
  'https://jsonplaceholder.typicode.com';

const useResources = (resource)  => {
  const [resources, setResources] = useState([]);
  const fetchResource = async (resource) => {
    const response = 
      await axios.get(`${JSONPLACEHOLDER_URL}/${resource}`);
    if (response.status === 200) {
      setResources(response.data);
    }
  }
  // How the useEffect work:
  //  - when values inside 2nd arg array of useEffect has been changed (different to prior value), 
  //    the 1st arg of useEffect method (the callback function) will be called.
  //  - Therefore, whether 1st arg callback of useEffect is called or not will depend on what value we pass
  //    into 2nd arg of useEffect.
  // Note:
  //  - You can't use async-await directly on 1st arg callback of useEffect. 
  //    EXCEPT: using IIFE. But it's ugly.
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
}

export default useResources;
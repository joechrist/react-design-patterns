import React, { useState, useEffect } from 'react';
import axios from 'axios';

// COMPONENT - Load any type of resources from the server
//resourceUrl : the resource url we want to grab from the server (ie: '/product/:id)
// resourceName : Any ressource from the server
// children : grab component data child
const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  //
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setState(response.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }

        return child;
      })}
    </>
  );
};

export default ResourceLoader;

/**
 * FIX BUGS: TypeError: Cannot destructure property 'name' of 'user' as it is null.
 *
 * {user} props is initially null when data loaded - To fix that:
 * 1- Provide a default value for 'user' like this: {user={}}
 * 2- Check if user exist before return it: ...return user user ? (...) : <p>Loading</p>
 * And add a default value to the destructuration: const {name , age, ...} = user || {}
 */

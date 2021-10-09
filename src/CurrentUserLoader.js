import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component - CONTAINER that take care to load the data ( Here the current user data )
// '{children}' : Grab data from the component we pass through
const CurrentUserLoader = ({ children }) => {
  //
  const [user, setUser] = useState(null);

  // Load the data from the server
  useEffect(() => {
    (async () => {
      const response = await axios.get('/current-user');
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
};

export default CurrentUserLoader;

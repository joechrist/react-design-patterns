import React, { useState, useEffect } from 'react';
import axios from 'axios';

// COMPONENT- CONTAINER that take care to load the data (Loading user by ID here!)
// userID : it's wil pass to the parent component (here App()) as a props
// children will be passed in the parent component (here App()) as a component like this
//
const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

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

export default UserLoader;

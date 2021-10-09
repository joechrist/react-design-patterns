import React from 'react';

// COMPONENT - It's will be passe in the parent component (here App()) as a component
// wrapped in this container like : <UserLoader><Userinfo/></UserLoader>
const UserInfo = ({ user }) => {
  // user info destructurate
  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default UserInfo;

/**
 * FIX BUGS: TypeError: Cannot destructure property 'name' of 'user' as it is null.
 *
 * {user} props is initially null when data loaded - To fix that:
 * 1- Provide a default value for 'user' like this: {user={}}
 * 2- Check if user exist before return it: ...return user user ? (...) : <p>Loading</p>
 * And add a default value to the destructuration: const {name , age, ...} = user || {}
 */

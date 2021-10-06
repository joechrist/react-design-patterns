import React from 'react';

// Component - We use 'fragment <></>' because we want that the parent component
// determine the all styling
const LargePersonListItem = ({ person }) => {
  // Full person data (more person information)
  // Remember in the database, ''hobbies'' is an array that's why we loop through
  const { name, age, hairColor, hobbies } = person;

  return (
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
  );
};

export default LargePersonListItem;

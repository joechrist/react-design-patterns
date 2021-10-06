import React from 'react';

// Component
const SmallPersonListItem = ({ person }) => {
  // Less person data
  const { name, age } = person;

  return (
    <p>
      Name: {name}, Age; {age} years
    </p>
  );
};

export default SmallPersonListItem;

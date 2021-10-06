import React from 'react';

// Component - Display people and product in the same list
// 'item' : item props we want to display
// 'resourceName' : product, people or another ressouces data we want to display
// 'itemComponent: ItemComponent' = actual COMPONENT we want to display
const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {/* loop in component and grab items of resource we pass in. */}
      {/* {...{ [resourceName]: item }} = for example, an object of person={item} */}
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;

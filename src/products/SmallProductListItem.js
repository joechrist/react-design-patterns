import React from 'react';

// Component
const SmallProductListItem = ({ product }) => {
  // Less product data (informations )we want to display
  const { name, price } = product;

  return (
    <h3>
      {name} - {price}
    </h3>
  );
};

export default SmallProductListItem;

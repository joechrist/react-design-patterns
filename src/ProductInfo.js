import React from 'react';

// COMPONENT
const ProductInfo = ({ product }) => {
  // Product info destructurate
  const { name, price, description, rating } = product || {};

  return product ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default ProductInfo;

/**
 * FIX BUGS: TypeError: Cannot destructure property 'name' of 'user' as it is null.
 *
 * {user} props is initially null when data loaded - To fix that:
 * 1- Provide a default value for 'user' like this: {product={}}
 * 2- Check if product exist before return it:...return product ? (...) : <p>Loading</p>
 * And add a default value to destructuration: const {name ,price, ...} = product|| {}
 */

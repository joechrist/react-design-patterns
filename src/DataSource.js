import React, { useState, useEffect } from 'react';

// COMPONENT - Load data and don't know where the data is coming from
// getDataFunc : props that grab data from the server that component don't know where
// It's more generic - Instead to write 'axios.get()', we will use the getDataFunc()
// function in place
const DataSource = ({ getDataFunc = () => {}, resourceName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      // Instead to write 'axios.get()', we will use the getDataFunc()
      // function in place
      const data = await getDataFunc();
      setState(data);
    })();
  }, [getDataFunc]);

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

export default DataSource;

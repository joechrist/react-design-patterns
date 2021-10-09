import UserInfo from './UserInfo';
import DataSource from './DataSource';
import ProductInfo from './ProductInfo';
import axios from 'axios';

// grab data from server with URL we passed in
const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

// COMPONENT -
function App() {
  return (
    <>
      {/* user resource */}
      <DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
        <UserInfo />
      </DataSource>
      {/* product resource */}
      <DataSource
        getDataFunc={getServerData('/products/1234')}
        resourceName="product"
      >
        <ProductInfo />
      </DataSource>
    </>
  );
}

export default App;

import UserInfo from './UserInfo';
import ResourceLoader from './ResourceLoader';
import ProductInfo from './ProductInfo';

// COMPONENT -
function App() {
  return (
    <>
      <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;

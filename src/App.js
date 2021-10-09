import UserInfo from './UserInfo';
import DataSource from './DataSource';
import axios from 'axios';

// grab data from server with URL we passed in
const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

// Like a server but in the user browser
// grab key-value in the localstorage in the user browser
// 'key': the key stored in the localstorage browser of the user
const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

// Text component example to load the key in the localstorage
const Text = ({ message }) => <h1>{message}</h1>;

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
        getDataFunc={getLocalStorageData('message')}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;

import SplitScreen from './SplitScreen';

//
const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: 'lightgreen' }}>{name}</h1>;
};

//
const RightHandComponent = ({ message }) => {
  return <p style={{ backgroundColor: 'lightgrey' }}>{message}!</p>;
};

// Main Component - We can grad data with '{children}' expression in 'SplitScreen'
// component - we can pass directly props 'name' and 'message' in component
// respectivily
function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Chris" />
      <RightHandComponent message="Hellooo" />
    </SplitScreen>
  );
}

export default App;

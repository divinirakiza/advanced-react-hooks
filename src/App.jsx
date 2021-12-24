import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function expensiveInitialState() {
  return 10;
};

const App = () => {
  // Renders only on initial state.
  useState(() => expensiveInitialState());

  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <p>{count}</p>
    </div>
  )

};


export default App;

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function expensiveInitialState() {
  return 10;
};

const App = () => {
  // Renders only on initial state.
  useState(() => expensiveInitialState());

  // Base Setter
  // const [count, setCount] = useState(0);

  const [{count1, count2}, setCount] = useState({count1: 0, count2: 1});

  return (
    <div>
      {/* Will override the whole object */}
      {/* <button onClick={() => setCount(curr => {count1: (curr.count1 + 1)} )}>+</button> */}
    
      <button onClick={() => 
                              setCount(curr => (
                                { ...curr,
                                  count1: (curr.count1 + 1) 
                                  
                                }))}>+</button>
      
      {/* // No overwriting updates */}
      {/* <button onClick={() => setCount(count => (count + 1))}>Count 3</button> */}

      <p>Count1: {count1}</p>
      <p>Count2: {count2}</p>
    </div>
  )

};


export default App;

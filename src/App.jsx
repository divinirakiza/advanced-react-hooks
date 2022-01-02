import React from 'react';
import logo from './logo.svg';
import './App.css';
import {UseEffectUsage, UseStateUsage, UseRefUsage} from './hooks';

function expensiveInitialState() {
  return 10;
};



const App = () => {
  return (
        <div>
          {/* <UseStateUsage/> */}
            {/* <UseEffectUsage/> */}
        <UseRefUsage />
        </div>
  )

};


export default App;

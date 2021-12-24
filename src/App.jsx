import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hooks from './hooks';

function expensiveInitialState() {
  return 10;
};





const App = () => {

  return (
        <div>
            <Hooks.UseState/>
        </div>
  )

};


export default App;

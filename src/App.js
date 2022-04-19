import React from 'react';
import './App.scss';
import { store } from './';
import {testFunction} from './actions/index';

function App() {
  return (
    <div className="App">
      <h1>Click the button:</h1>
      <h2>Now open the console log :D</h2>
      <button onClick={() => store.dispatch(testFunction())}>TEST</button>
    </div>
  );
}

export default App;

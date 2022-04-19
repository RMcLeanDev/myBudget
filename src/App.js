import React from 'react';
import './App.scss';
import { store } from './';
import {testFunction} from './actions/index';
import { Switch, Route } from 'react-router-dom';
import SignIn from './components/SignIn'
import {connect} from 'react-redux';

function App(props) {

  console.log(props)
  
  return (
    <div className="App">
      <h1>Click the button:</h1>
      <h2>Now open the console log :D</h2>
      <button onClick={() => store.dispatch(testFunction())}>TEST</button>
    </div>
  );
}

const mapStateToProps = state => ({
  authUserState: state.authState
})
export default connect(mapStateToProps)(App);

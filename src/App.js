import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn'
import {connect} from 'react-redux';
import Home from './components/Home';
import LoadingAnimation from './components/LoadingAnimation';
import SignUp from './components/SignUp';

function App(props) {

  return (
    <div className="App">
      {props.authUserState ? 
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </div>
      : props.authUserState === false ?
      <Routes>
        <Route exact path="/" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes> 
      : props.authUserState === null ? <LoadingAnimation/> : null}
    </div>
  );
}

const mapStateToProps = state => ({
  authUserState: state.authState
})
export default connect(mapStateToProps)(App);

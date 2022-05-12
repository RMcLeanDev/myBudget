import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn'
import {connect} from 'react-redux';
import Home from './components/Home';
import LoadingAnimation from './components/LoadingAnimation';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Settings from './components/Settings';
import Messaging from './components/messaging/Messaging';

function App(props) {

  return (
    <div className="App">
      {props.authUserState ? 
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/settings" element={<Settings unread={props.userInfo.info.unreadMessages}/>} />
          <Route path='/messages' element={<Messaging unread={props.userInfo.info.unreadMessages}/>} />
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
  authUserState: state.authState,
  userInfo: state.userInfo
})
export default connect(mapStateToProps)(App);

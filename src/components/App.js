import React from 'react';
import '../scss/App.scss';
import Error404 from './Error404';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import SignIn from './SignIn';

function App(props) {

  let checkedAuthState;
  let loader;

  if(props.authUser === true){
    checkedAuthState = Home
  } else if(props.authUser === false) {
    checkedAuthState = SignIn
  } else {
    loader = <img src={require('../assets/loadingGif.gif')} />
  }

  return (
    <div className="App">
      {loader}
      <Switch>
        <Route exact path ='/' component={checkedAuthState}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  authUser: state.authState
})

export default connect(mapStateToProps)(App);

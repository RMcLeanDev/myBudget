import React from 'react';
import '../scss/App.scss';
import Error404 from './Error404';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import SignIn from './SignIn';
import Header from './Header';

function App(props) {

  let checkedAuthState;
  let header;

  if(props.authUser){
    checkedAuthState = Home
    header = <Header />
  } else {
    checkedAuthState = SignIn
    header = null;
  }

  return (
    <div className="App">
      {header}
      <Switch>
        <Route exact path ='/' component={checkedAuthState} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  authUser: state.authState,
})

export default connect(mapStateToProps)(App);

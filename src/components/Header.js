import React from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import '../scss/header.scss';

function Header(props){
  
  function signOut(){
      firebase.auth().signOut();
  }

  return(
    <div className="header">
      <Link to='/'>Home</Link>
      <h2>Welcome {props.userInformation.name}</h2>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Header

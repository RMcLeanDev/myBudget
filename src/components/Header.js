import React from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

function Header(props){
  
  function signOut(){
      firebase.auth().signOut();
  }

  console.log(props)

  return(
    <div>
      <h2>Welcome {props.userInformation.name}</h2>
      <Link to='/'>Home</Link>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Header

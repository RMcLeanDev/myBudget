import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as firebase from 'firebase';

function Header(){
  
  function signOut(){
      firebase.auth().signOut();
  }

  return(
    <div>
      <h2>THIS IS A HEADER</h2>
      <Link to='/'>Home</Link>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Header

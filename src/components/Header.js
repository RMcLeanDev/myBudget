import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import '../scss/header.scss';

function Header(){

  const [user, setUser] = useState([])

  useEffect(() => {
    let currentUser = firebase.auth().currentUser;
    firebase.firestore().collection('users').doc(currentUser.uid).get().then((snapshot) => {
      setUser(snapshot.data())
    })
  })
  
  function signOut(){
      firebase.auth().signOut();
  }

  return(
    <div className="header">
      <Link to='/'>Home</Link>
      <h2>Welcome {user.name}</h2>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Header

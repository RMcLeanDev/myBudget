import React from 'react';
import firebase from 'firebase/compat/app';
import "firebase/auth";
import "../Home.scss";

function Home(){
    function signOut(){
        firebase.auth().signOut()
    }
    return(
        <div className="homeComponent">
            <h1>Home component</h1>
            <button onClick={signOut}>Sign out</button>
        </div>
    )
}

export default Home;
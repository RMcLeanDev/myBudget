import React from 'react';
import firebase from 'firebase/compat/app';
import "firebase/auth";

function Settings(){

    function signOut(){
        firebase.auth().signOut()
    }

    return(
        <div>
            <button onClick={signOut}>Log Out</button>
        </div>
    )
}

export default Settings;
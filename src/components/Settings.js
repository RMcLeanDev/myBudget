import React from 'react';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';
import "firebase/auth";

function Settings(){

    const navigate = useNavigate();

    function signOut(){
        firebase.auth().signOut();
        navigate("/")
    }

    return(
        <div>
            <button onClick={signOut}>Log Out</button>
        </div>
    )
}

export default Settings;
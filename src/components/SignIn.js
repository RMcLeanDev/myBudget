import React, {useState} from "react";
import * as firebase from 'firebase';

function SignIn(){

    const [error, setError] = useState(null);
    let _email = null;
    let _password = null;

    function signInFunction(e){
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(_email.value, _password.value).then(function(user) {
            if(user){
                setError(null);
            }
        }).catch(error => {
            setError(error.message);
        })
    }

    function signOut(){
        firebase.auth().signOut();
    }

    return(
        <div>
            <form onSubmit={signInFunction}>
                <input placeholder="Email" type="email" ref={value => {_email = value}}/>
                <input placeholder="Password" type="password" ref={value => {_password = value}}/>
                <button type="submit">Sign in</button>
                <p>{error}</p>
            </form>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}

export default SignIn;
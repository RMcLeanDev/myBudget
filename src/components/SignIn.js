import React, {useState} from "react";
import * as firebase from 'firebase';
import SignUp from './SignUp';

function SignIn(){

    const [error, setError] = useState(null);
    const [signUp, setSignUp] = useState(false);
    let _email = null;
    let _password = null;
    let signUpForm = null;

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

    if(signUp){
        signUpForm = <SignUp closeSignUp={() => {setSignUp(false)}}/>
    } else {
        signUpForm = null;
    }

    return(
        <div className="signIn">
            {signUpForm}
            <form onSubmit={signInFunction}>
                <input placeholder="Email" type="email" ref={value => {_email = value}}/>
                <input placeholder="Password" type="password" ref={value => {_password = value}}/>
                <button type="submit">Sign in</button>
                <p>{error}</p>
            </form>
            <h3 onClick={() => {setSignUp(true)}}>Create account?</h3>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}

export default SignIn;
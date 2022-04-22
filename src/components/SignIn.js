import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LoadingAnimation from './LoadingAnimation';
import firebase from 'firebase/compat/app';
import "firebase/auth";

function SignIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [viewPass, setViewPass] = useState(true)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function signIn(e){
        setLoading(true)
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            console.log(user.user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.code + ": " + error.message)
        });
    }
    return(
        <div className="signComponents">
            {loading ? <LoadingAnimation/>:null}
            <div className="mainBorder">
                <h1>My Budget!</h1>
                <hr/>
                <form onSubmit={signIn}>
                    <input required placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input required placeholder="Password" type={viewPass ? "password":"text"} value={password} onChange={e => setPassword(e.target.value)}/>
                    <i className={viewPass ? "far fa-eye-slash": "far fa-eye"} id="togglePassword" onClick={() => setViewPass(!viewPass)}></i>
                    <br/>
                    <button className="signButton" type="submit">Lets Go</button>
                </form>
                <hr/>
                <div className="createAccount">
                    <Link to="signup">Create an Account!<i class="fa-solid fa-square-caret-right rightArrow"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
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
            if(error.code.includes("user-not-found")){
                setError("noUserFound")
            } else if(error.code.includes("wrong-password")) {
                setError("incorrectPassword")
            }
            setLoading(false)
        });
    }
    return(
        <div className="signComponents">
            {loading ? <LoadingAnimation/>:null}
            <div className="mainBorder">
                <h1>My Budget!</h1>
                <hr/>
                <form onSubmit={signIn}>
                    <p style={{fontWeight: 'bold',color: 'red', margin: 'auto'}}>{error === "noUserFound" ? "There is no user with that email.":null}</p>
                    <input required placeholder="Email" type="email" value={email} onChange={e => {setEmail(e.target.value);
                    setError(null)}}/>
                    <input required placeholder="Password" type={viewPass ? "password":"text"} value={password} onChange={e => {setPassword(e.target.value); setError(null)}}/>
                    <i className={viewPass ? "far fa-eye-slash": "far fa-eye"} id="togglePassword" onClick={() => setViewPass(!viewPass)}></i>
                    <p style={{fontWeight: 'bold',color: 'red', width: '80%', margin: 'auto'}}>{error === "incorrectPassword" ? "Password is incorrect. Please try again.":null}</p>
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
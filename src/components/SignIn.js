import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function SignIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [viewPass, setViewPass] = useState(true)

    function signIn(e){
        e.preventDefault()
        console.log(email, password)
    }
    return(
        <div className="signInComponent">
            <div className="mainBorder">
                <h1>Sign in</h1>
                <form onSubmit={signIn}>
                    <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="Password" type={viewPass ? "password":"text"} value={password} onChange={e => setPassword(e.target.value)}/>
                    <i className={viewPass ? "far fa-eye-slash": "far fa-eye"} id="togglePassword" onClick={() => setViewPass(!viewPass)}></i>
                    <br/>
                    <button type="submit">Lets Go</button>
                </form>
                <hr/>
                <div className="createAccount">
                    <NavLink to="/signup">Create an Account!</NavLink>
                    <i class="fa-solid fa-square-caret-right rightArrow"></i>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
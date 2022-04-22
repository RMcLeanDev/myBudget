import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function SignIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [viewPass, setViewPass] = useState(true)

    function signIn(e){
        e.preventDefault()
        console.log(email, password)
    }
    return(
        <div className="signComponents">
            <div className="mainBorder">
                <h1>My Budget!</h1>
                <hr/>
                <form onSubmit={signIn}>
                    <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="Password" type={viewPass ? "password":"text"} value={password} onChange={e => setPassword(e.target.value)}/>
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
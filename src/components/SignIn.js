import React, {useState} from 'react';

function SignIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
                    <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <br/>
                    <button type="submit">Lets Go</button>
                </form>
                <hr/>
                <p>Create an Account!</p>
            </div>
        </div>
    )
}

export default SignIn;
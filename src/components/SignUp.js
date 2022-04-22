import React, {useState} from 'react';

function SignUp(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [pass1, setPass1] = useState("")
    const [pass2, setPass2] = useState("")

    function createAccount(e){
        e.preventDefault()
    }

    return(
        <div className="mainBorder">
            <h1>Lets create a Account!</h1>
            <form onSubmit={createAccount}>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name"/>
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name"/>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={pass1} onChange={e => setPass1(e.target.value)} placeholder="Password" />
                <input type="password" value={pass2} onChange={e => setPass2(e.target.value)} placeholder="Verify Password" />
                {pass1 === pass2 ? "":<p>Passwords don't match</p>}
                <button className="signButton">Create!</button>
            </form>
        </div>
    )
}

export default SignUp;
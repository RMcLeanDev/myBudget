import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';
import LoadingAnimation from './LoadingAnimation';
import {v4} from 'uuid';
import "firebase/auth";
import "firebase/compat/database";

function SignUp(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [viewPass, setViewPass] = useState(true);
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate()

    function createAccount(e){
        e.preventDefault()
        setLoading(true)
        let messageId = v4()
        let messageText = `Welcome to "My Budget" ${firstName + " " + lastName}. My name is Ryan McLean, I am the developer and designer of this app. This message section is for if you have any questions. More importantly though this section is for any ideas or feedback you have about the app. I will respond as soon as I can and welcome all feedback or ideas you may have. Thank you!`
        firebase.auth().createUserWithEmailAndPassword(email, pass2).then((userCredential) => {
            let user = userCredential.user;
            firebase.database().ref(`users/${user.uid}`).set({"status": "active", "name": firstName + " " + lastName, "email": email, "firstName": firstName, "lastName": lastName, "id":user.uid, messages:{unreadMessages:1, [messageId]: {"text":messageText, from: process.env.REACT_APP_DEVELOPER_ID, status: "unread"}}});
            navigate("/")
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return(
        <div className="mainBorder">
            {loading ? <LoadingAnimation />:null}
            <h1>Lets create a Account!</h1>
            <form onSubmit={createAccount}>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name"/>
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name"/>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type={viewPass ? "password":"text"} value={pass1} onChange={e => setPass1(e.target.value)} placeholder="Password" />
                <input type={viewPass ? "password":"text"} value={pass2} onChange={e => setPass2(e.target.value)} placeholder="Verify Password" />
                <i className={viewPass ? "far fa-eye-slash": "far fa-eye"} id="togglePassword" onClick={() => setViewPass(!viewPass)}></i>
                {pass1 === pass2 ? null:<p>Passwords don't match</p>}
                <button className="signButton">Create!</button>
            </form>
            <hr/>
            <div className="createAccount">
                <Link to="/">Already have a account? Click Here!<i class="fa-solid fa-square-caret-right rightArrow"></i></Link>
            </div>
        </div>
    )
}

export default SignUp;
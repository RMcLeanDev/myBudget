import React from 'react';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "firebase/auth";
import "firebase/compat/database";

function Settings(props){

    console.log(props);

    const navigate = useNavigate();

    function signOut(){
        firebase.auth().signOut();
        navigate("/")
    }

    function addUndread(){
        firebase.database().ref(`users/${process.env.REACT_APP_DEVELOPER_ID}`).once("value", function(snapshot){
            let info = snapshot.val();
            let newNum = info.messages.unreadMessages + 1;
            console.log(newNum)
            firebase.database().ref(`users/${process.env.REACT_APP_DEVELOPER_ID}/messages`).update({unreadMessages: newNum})
        })
    }

    return(
        <div>
            <div className="toMessages">
                <button onClick={addUndread}>Click me</button>
                <Link to='/messages'>
                    <i class="fa-solid fa-inbox"></i>
                    <p>Message Devloper</p>
                    {
                        props.messages ? props.messages.unreadMessages > 0 ? <p className="unreadBadge">{props.messages.unreadMessages}</p> : null : null
                    }
                </Link>
            </div>
            <div className="toMessages">
                <a onClick={signOut}>
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <p onClick={signOut}>Log Out</p>
                </a>
            </div>
        </div>
    )
}

export default Settings;
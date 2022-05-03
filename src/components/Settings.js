import React from 'react';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "firebase/auth";

function Settings(props){

    console.log(props);

    const navigate = useNavigate();

    function signOut(){
        firebase.auth().signOut();
        navigate("/")
    }

    return(
        <div>
            <div className="toMessages">
                <Link to='/messages'>
                    <i class="fa-solid fa-inbox"></i>
                    <p>Messages</p>
                    <p className={props.messages ? "unreadBadge":"noBadge"}>2</p>
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
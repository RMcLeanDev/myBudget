import React from 'react';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';
import "firebase/auth";
import "firebase/compat/database";

function Settings(props){

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
                    <p>Message Devloper</p>
                    {
                        props.unread ? props.unread > 0 ? <p className="unreadBadge">{props.unread}</p>: null : null
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
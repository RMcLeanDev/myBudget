import React, {useState} from 'react';
import firebase from 'firebase/compat/app';
import "firebase/auth";

function Header(){

    const[showHide, setShowHide] = useState(false);

    function signOut(){
        firebase.auth().signOut()
    }

    return(
        <div className="header">
            <div className="left">
                <p>Developed and Maintend by:</p>
            </div>
            <div className={`right ${showHide ? "change":null}`} onClick={() => setShowHide(!showHide)}>
                <div className="line1"/>
                <div className="line2"/>
                <div className="line3"/>
            </div>
            <div className={`headerMenu ${showHide ? "showMenu":null}`}>
                {
                    showHide ? 
                    <div className="signoutButton">
                        <p onClick={signOut}>Log Out</p>
                    </div>
                    : null 
                }
            </div>
        </div>
    )
}

export default Header;
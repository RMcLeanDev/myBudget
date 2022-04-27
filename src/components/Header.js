import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import "firebase/auth";

function Header(){

    const[showHide, setShowHide] = useState(false);
    const[active, setActive] = useState("home")

    function signOut(){
        firebase.auth().signOut()
    }

    return(
        <div className="header">
            <div className="tabItem">
                <div className={active === "home" ? "active":null}>
                    <Link to="/" onClick={() => setActive("home")}>
                        <i class="fa-solid fa-house"></i>
                        <p>Home</p>
                    </Link>
                </div>
            </div>
            <div className="vr"/>
            <div className="tabItem">
                <div className={active === "settings" ? "active":null}>
                    <Link to="/settings" onClick={() => setActive("settings")}>
                        <i class="fa-solid fa-bars"></i>
                        <p>Settings</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
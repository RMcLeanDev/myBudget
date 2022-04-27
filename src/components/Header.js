import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Header(){

    const[active, setActive] = useState("home")

    return(
        <div className="header">
            <div className="tabItem">
                <div className={active === "home" ? "active":null}>
                    <Link to="/" onClick={() => setActive("home")}>
                        <i className="fa-solid fa-house"></i>
                        <p>Home</p>
                    </Link>
                </div>
            </div>
            <div className="vr"/>
            <div className="tabItem">
                <div className={active === "settings" ? "active":null}>
                    <Link to="/settings" onClick={() => setActive("settings")}>
                        <i className="fa-solid fa-bars"></i>
                        <p>Settings</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
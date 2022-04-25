import React, {useState} from 'react';

function Header(){

    const[showHide, setShowHide] = useState(false);

    return(
        <div className="header">
            <div className="left">
            </div>
            <div className={`right ${showHide ? "change":null}`} onClick={() => setShowHide(!showHide)}>
                <div className="line1"/>
                <div className="line2"/>
                <div className="line3"/>
            </div>
        </div>
    )
}

export default Header;
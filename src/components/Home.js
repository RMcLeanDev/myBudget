import React from 'react';
import firebase from 'firebase/compat/app';
import LoadingAnimation from './LoadingAnimation';
import "firebase/auth";
import "../Home.scss";

function Home(){
    return(
        <div className="homeComponent">
            <h1>Home component</h1>
            <LoadingAnimation noBg={true}/>
        </div>
    )
}

export default Home;
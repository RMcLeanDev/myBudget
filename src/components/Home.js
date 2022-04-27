import React from 'react';
import LoadingAnimation from './LoadingAnimation';

function Home(){
    return(
        <div className="homeComponent">
            <h1>Home component</h1>
            <LoadingAnimation noBg={true}/>
        </div>
    )
}

export default Home;
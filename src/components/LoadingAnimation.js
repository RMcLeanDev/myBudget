import React from 'react';

function LoadingAnimation(props){
    return(
        <div className={`ldscontainer ${props.noBg ? "noBg":null}`}><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
    )
}

export default LoadingAnimation;
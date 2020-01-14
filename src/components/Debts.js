import React from 'react';

function Debts(props){

    console.log(props)

    if(props.debts.status === "none"){
        console.log("none set yet in debts")
    } else {
        console.log("there is something in debts")
    }

    return(
        <div>
            <h1>Debts Section</h1>
        </div>
    )
}

export default Debts;
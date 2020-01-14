import React from 'react';

function Budget(props){

    if(props.budget.status === "none"){
        console.log("none set yet in budget")
    } else {
        console.log("there is something in budget")
    }

    return(
        <div>
            <h1>Budget Section</h1>
        </div>
    )
}

export default Budget;
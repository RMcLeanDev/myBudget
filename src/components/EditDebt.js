import React from 'react';

function EditDebt(props){

    console.log(props)

    function updateDebt(e){
        e.preventDefault();
    }

    return(
        <div>
            <div className="addDebtContainer">
            <img src={require("../assets/x.png")} onClick={props.closeEditDebtForm}/>
            <div className="addDebtWindow">
                <form onSubmit={updateDebt}>
                    
                    <button type="submit">Enter</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default EditDebt;
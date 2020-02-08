import React from 'react';
import '../scss/EditDebt.scss';

function EditDebt(props){

    console.log(props)

    function updateDebt(e){
        e.preventDefault();
    }

    return(
        <div className="editDebtContainer">
            <img src={require("../assets/x.png")} onClick={props.closeEditDebtForm}/>
            <div className="editDebtWindow">
                <form onSubmit={updateDebt}>
                    
                    <button type="submit">Enter</button>
                </form>
            </div>
        </div>
    )
}

export default EditDebt;
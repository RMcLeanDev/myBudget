import React from 'react';
import * as firebase from 'firebase';
import '../scss/EditDebt.scss';

function EditDebt(props){

    console.log(props)

    function updateDebt(e){
        e.preventDefault();
    }

    function deleteThisDebt(){
        let user = firebase.auth().currentUser.uid;
        firebase.database().ref(`users/${user}/debts/${props.information.id}`).remove()
        props.closeEditDebtForm()
    }

    return(
        <div className="editDebtContainer">
            <img src={require("../assets/x.png")} onClick={props.closeEditDebtForm}/>
            <div className="editDebtWindow">
                <form onSubmit={updateDebt}>
                    
                    <button type="submit">Enter</button>
                </form>
                <button onClick={deleteThisDebt}>Delete</button>
            </div>
        </div>
    )
}

export default EditDebt;
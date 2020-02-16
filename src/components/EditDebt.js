import React, {useState} from 'react';
import * as firebase from 'firebase';
import '../scss/EditDebt.scss';

function EditDebt(props){

    const [confirmation, setConfirmation] = useState(false);

    let confirmationScreen;
    let _startingBalance = null;
    let _currentBalance = null;

    if(confirmation){
        confirmationScreen = <div>
            <h3>Are you sure you want to delete {props.information.debtItem.name}</h3>
            <button onClick={deleteThisDebt}>Confirm</button>
        </div>
    } else {
        confirmationScreen = null;
    }

    function updateDebt(e){
        e.preventDefault();
        let user = firebase.auth().currentUser.uid;
        let newStartingBalance;
        let newCurrentBalance;
        if(_startingBalance.value){
            newStartingBalance = parseFloat(_startingBalance.value);
        } else {
            newStartingBalance = props.information.debtItem.totalDebtAmount;
        }
        if(_currentBalance.value){
            newCurrentBalance = parseFloat(_currentBalance.value);
        } else {
            newCurrentBalance = props.information.debtItem.currentBalance;
        }
        let newAmountPaid = newStartingBalance - newCurrentBalance;
        firebase.database().ref(`users/${user}/debts/${props.information.id}`).update({currentAmountPaid: parseFloat(newAmountPaid.toFixed(2)), totalDebtAmount: parseFloat(newStartingBalance), currentBalance: parseFloat(newCurrentBalance)}).catch(error => {
            console.log(error)
        })
        props.closeEditDebtForm()
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
                    <label>
                        Starting Balance:
                        <input type="number" placeholder={props.information.debtItem.totalDebtAmount} step="any" ref={value => {_startingBalance = value}}/>
                    </label>
                    <br />
                    <label>
                        Current Balance:
                        <input type="number" placeholder={props.information.debtItem.currentBalance} step="any" ref={value => {_currentBalance = value}}/>
                    </label>
                    <br />
                    <button type="submit">Enter</button>
                </form>
                <button onClick={() => setConfirmation(true)}>Delete</button>
                {confirmationScreen}
            </div>
        </div>
    )
}

export default EditDebt;
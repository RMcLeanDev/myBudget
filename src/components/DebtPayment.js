import React from 'react';
import '../scss/DebtPayment.scss';
import * as firebase from 'firebase';

function DebtPayment(props){

    let _number = null;

    function debtPayment(e){
        let user = firebase.auth().currentUser.uid;
        e.preventDefault()
        let newBalance = parseFloat(props.information.values.totalDebtAmount) - parseFloat(_number.value);
        let newAmountPaid = parseFloat(props.information.values.currentAmountPaid) + parseFloat(_number.value);
        firebase.database().ref(`users/${user}/debts/${props.information.id}`).update({currentAmountPaid: newAmountPaid, totalDebtAmount: newBalance, timeStamp: Date.now()}).catch(error => {
            console.log(error)
        })
        props.closeDebtPaymentForm();
    }

    return(
        <div className="debtPaymentContainer">
            <img src={require("../assets/x.png")} onClick={props.closeDebtPaymentForm}/>
            <div className="debtPaymentWindow">
                <form onSubmit={debtPayment}>
                    <input type="number" min="1" step="any" placeholder="Total Debt Amount" ref={value => {_number = value}}/>
                    <button type="submit">Enter</button>
                </form>
            </div>
        </div>
    )
}

export default DebtPayment;
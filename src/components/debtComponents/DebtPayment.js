import React from 'react';
import '../../scss/DebtPayment.scss';
import * as firebase from 'firebase';

function DebtPayment(props){

    let _number = null;
    console.log(props)

    function debtPayment(e){
        let user = firebase.auth().currentUser.uid;
        e.preventDefault()
        let thisDebt = props.information.values;
        let newBalance;
        let newAmountPaid;
        let interestPaidAmount;
        if(thisDebt.interest){
            let newInterestAmount = thisDebt.interestRate / 12 * (thisDebt.totalDebtAmount - thisDebt.currentAmountPaid);
            newBalance = parseFloat(thisDebt.currentBalance) - parseFloat(_number.value - newInterestAmount);
            newAmountPaid = parseFloat(thisDebt.currentAmountPaid) + parseFloat(_number.value - newInterestAmount);
            interestPaidAmount = newInterestAmount.toFixed(2);
        } else {
            newBalance = parseFloat(thisDebt.currentBalance) - parseFloat(_number.value);
            newAmountPaid = parseFloat(thisDebt.currentAmountPaid) + parseFloat(_number.value);
            interestPaidAmount = null;
        }
        let newPayment;
        let num;
        if(thisDebt.payments){
            num = parseInt(thisDebt.payments.length);
            newPayment = {amount: _number.value, timeStamp: Date.now(), interestPaid: interestPaidAmount}
        } else {
            num = 0;
            newPayment = {amount: _number.value, timeStamp: Date.now(), interestPaid: interestPaidAmount}
        }
        firebase.database().ref(`users/${user}/debts/${props.information.id}`).update({currentAmountPaid: newAmountPaid.toFixed(2), currentBalance: newBalance.toFixed(2), timeStamp: Date.now()}).catch(error => {
            console.log(error)
        })
        firebase.database().ref(`users/${user}/debts/${props.information.id}/payments/${num}`).set(newPayment).catch(error => {
            console.log(error)
        })
        props.closeDebtPaymentForm();
    }

    return(
        <div className="debtPaymentContainer">
            <img src={require("../../assets/x.png")} onClick={props.closeDebtPaymentForm}/>
            <div className="debtPaymentWindow">
                <form onSubmit={debtPayment}>
                    <h1>Payment Amount</h1>
                    <input type="number" min="1" step="any" placeholder="ex: 24 = $24" ref={value => {_number = value}}/>
                    <br />
                    <button type="submit">Send Payment</button>
                </form>
            </div>
        </div>
    )
}

export default DebtPayment;
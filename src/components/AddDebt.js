import React from 'react';
import * as firebase from 'firebase';
import { v4 } from 'uuid';
import '../scss/AddDebts.scss';

function AddDebt(props){

    let _total = null;
    let _current = null;
    let _name = null;

    function sendDebt(e){
        e.preventDefault()
        let num = _total.value - _current.value;
        console.log(num)
        let user = firebase.auth().currentUser.uid;
        firebase.database().ref(`users/${user}/debts/${v4()}`).set({totalDebtAmount: num, name: _name.value, timeStamp: Date.now(), currentAmountPaid: parseFloat(_current.value), startAmount: parseFloat(_total.value)})
        _total.value = null;
        _current.value = null;
        _name.value = null;
    }

    return(
        <div className="addDebtContainer">
            <img src={require("../assets/x.png")} onClick={props.closeDebtForm}/>
            <div className="addDebtWindow">
                <form onSubmit={sendDebt}>
                    <input placeholder="Name of Debt" ref={value => {_name = value}}/>
                    <input type="number" min="1" step="any" placeholder="Total Debt Amount" ref={value => {_total = value}}/>
                    <input type="number" min="1" step="any" placeholder="Current Amount Paid" ref={value => {_current = value}}/>
                    <button type="submit">Enter</button>
                </form>
            </div>
        </div>
    )
}

export default AddDebt;
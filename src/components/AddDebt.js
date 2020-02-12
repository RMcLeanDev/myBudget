import React, {useState} from 'react';
import * as firebase from 'firebase';
import { v4 } from 'uuid';
import '../scss/AddDebts.scss';

function AddDebt(props){

    const [checkInterest, setInterest] = useState(false);

    let _total = null;
    let _current = null;
    let _name = null;
    let _air = null;
    let _years = null;
    let _ppy = null;
    let _amount = null;
    let checkedInterest;

    function sendDebt(e){
        e.preventDefault()
        let num = _total.value - _current.value;
        console.log(num)
        let user = firebase.auth().currentUser.uid;
        let currentPaid;
        let payments;
        if(_current.value){
            currentPaid = parseFloat(_current.value);
            payments = {0: {amount: _current.value, timeStamp: Date.now()}}
        } else {
            currentPaid = 0;
            payments = null;
        }
        firebase.database().ref(`users/${user}/debts/${v4()}`).set({totalDebtAmount: num, name: _name.value, timeStamp: Date.now(), currentAmountPaid: currentPaid, payments, startAmount: parseFloat(_total.value)}).catch(error => {
            console.log(error)
        })
        _total.value = null;
        _current.value = null;
        _name.value = null;
    }

    function pmt(e){
        e.preventDefault();
        // interest is (interest_rate/12 * balance);
        let r = parseFloat((_air.value / 100) / 12);
        let months = parseInt(_years.value * 12);
        let payment = parseFloat(_amount.value) * ((r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1));
        console.log(payment.toFixed(2));
    }

    if(checkInterest){
        checkedInterest = <div>
            <input placeholder="Annual Interest Rate" ref={value => {_air = value}}/>
            <input placeholder="Years" ref={value => {_years = value}}/>
            <input placeholder="Payments Per Year" ref={value => {_ppy = value}}/>
        </div>
    } else {
        checkedInterest = null;
    }

    function interestBox(){
        if(checkInterest){
            setInterest(false)
        } else {
            setInterest(true)
        }
    }

    return(
        <div className="addDebtContainer">
            <img src={require("../assets/x.png")} onClick={props.closeDebtForm}/>
            <div className="addDebtWindow">
                <div className="interestCheck">
                    <label class="checkbox-label">
                        <input type="checkbox" checked={checkInterest} onClick={interestBox}/>
                        <span class="checkbox-custom rectangular"></span>
                    </label>
                    <p>Interest</p>
                </div>
                <form onSubmit={sendDebt}>
                    <input placeholder="Name of Debt" ref={value => {_name = value}}/>
                    <input type="number" min="1" step="any" placeholder="Total Debt Amount" ref={value => {_total = value}}/>
                    <input type="number" min="0" step="any" placeholder="Current Amount Paid" ref={value => {_current = value}}/>
                    {checkedInterest}
                    <button type="submit">Enter</button>
                </form>
            </div>
        </div>
    )
}

export default AddDebt;
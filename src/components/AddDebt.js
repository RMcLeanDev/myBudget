import React, {useState} from 'react';
import * as firebase from 'firebase';
import { v4 } from 'uuid';
import '../scss/AddDebts.scss';

function AddDebt(props){

    const [checkInterest, setInterest] = useState(false);
    const [monthYear, setMonthOrYear] = useState("yearSelection")

    let _total = null;
    let _current = null;
    let _name = null;
    let _air = null;
    let _months = null;
    let _currentBalance = null;
    let checkedInterest;
    let placeholderForMonthYear;

    if(monthYear === "monthSelection"){
        placeholderForMonthYear = "Months"
    } else {
        placeholderForMonthYear = "Years"
    }

    function sendDebt(e){
        e.preventDefault()
        let user = firebase.auth().currentUser.uid;
        let currentPaid;
        let payments;
        if(_total.value !== _currentBalance.value){
            currentPaid = parseFloat(_total.value - _currentBalance.value);
            payments = {0: {amount: currentPaid, timeStamp: Date.now()}}
        } else {
            currentPaid = 0;
            payments = null;
        }
        if(checkInterest){
            let timePeriod;
            if(monthYear === "monthSelection"){
                timePeriod = parseInt(_months.value)
            } else {
                timePeriod = parseInt(_months.value * 12)
            }
            firebase.database().ref(`users/${user}/debts/${v4()}`).set({totalDebtAmount: _total.value, name: _name.value, timeStamp: Date.now(), currentAmountPaid: currentPaid, payments, interest: true, interestRate: parseFloat(_air.value / 100), months: timePeriod, currentBalance: parseFloat(_currentBalance.value)})
        } else {
            // interest false
            firebase.database().ref(`users/${user}/debts/${v4()}`).set({totalDebtAmount: _total.value, name: _name.value, timeStamp: Date.now(), currentAmountPaid: currentPaid, payments, currentBalance: parseFloat(_currentBalance.value)}).catch(error => {
                console.log(error)
            })
        }
        _total.value = null;
        _name.value = null;
    }

    if(checkInterest){
        checkedInterest = <div>
            <input required type="number" min="0" step="any" placeholder="Interest Rate" ref={value => {_air = value}}/>
            <select id="monthsOrYears" onChange={monthYearCheck} value={monthYear}>
                <option value="monthSelection">Months</option>
                <option value="yearSelection">Years</option>
            </select>
            <input required type="number" min="0" step="any" placeholder={placeholderForMonthYear} ref={value => {_months = value}}/>
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

    function monthYearCheck(){
        if(monthYear === "monthSelection"){
            setMonthOrYear("yearSelection")
        } else {
            setMonthOrYear("monthSelection")
        }
    }

    return(
        <div className="addDebtContainer">
            <img src={require("../assets/x.png")} onClick={props.closeDebtForm}/>
            <div className="addDebtWindow">
                <div className="interestCheck">
                    <label className="checkbox-label">
                        <input type="checkbox" checked={checkInterest} onClick={interestBox}/>
                        <span className="checkbox-custom rectangular"></span>
                    </label>
                    <p>Interest</p>
                </div>
                <form onSubmit={sendDebt}>
                    <input required placeholder="Name of Debt" ref={value => {_name = value}}/>
                    <input required type="number" min="1" step="any" placeholder="Total Debt Amount" ref={value => {_total = value}}/>
                    <input required type="number" min="0" step="any" placeholder="Current Balance" ref={value => {_currentBalance = value}}/>
                    {checkedInterest}
                    <button type="submit">Enter</button>
                </form>
            </div>
        </div>
    )
}

export default AddDebt;
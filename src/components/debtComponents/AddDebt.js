import React, {useState} from 'react';
import * as firebase from 'firebase';
import { v4 } from 'uuid';
import '../../scss/AddDebts.scss';
import '../../scss/CloseButton.scss';

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
        placeholderForMonthYear = "ex: 24"
    } else {
        placeholderForMonthYear = "ex: 2"
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
            <p>Interest Rate</p>
            <input required type="number" min="0" step="any" placeholder="ex: 4 = 4%" ref={value => {_air = value}}/>
            <br />
            <p>Duration of Loan</p>
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
            <img className="closeButton" src={require("../../assets/x.png")} onClick={props.closeDebtForm}/>
            <div className="addDebtWindow">
                <div className="interestCheck">
                    <label className="checkbox-label">
                        <input type="checkbox" defaultChecked={checkInterest} onClick={interestBox}/>
                        <span className="checkbox-custom rectangular"></span>
                    </label>
                    <p>Interest</p>
                </div>
                <form onSubmit={sendDebt} className="inputSection">
                    <p>Name of Debt</p>
                    <input required placeholder="ex: Bank name" ref={value => {_name = value}}/>
                    <p>Starting Debt Amount</p>
                    <input required type="number" min="1" step="any" placeholder="ex: 5000" ref={value => {_total = value}}/>
                    <p>Current Balance</p>
                    <input required type="number" min="0" step="any" placeholder="ex: 4500" ref={value => {_currentBalance = value}}/>
                    {checkedInterest}
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </div>
    )
}

export default AddDebt;
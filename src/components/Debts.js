import React from 'react';
import * as firebase from 'firebase';
import { v4 } from 'uuid';
import '../scss/Debts.scss';

function Debts(props){

    let _total = null;
    let _current = null;
    let _name = null;
    let display;

    function sendDebt(e){
        e.preventDefault()
        let num = _total.value - _current.value;
        console.log(num)
        let user = firebase.auth().currentUser.uid;
        firebase.database().ref(`users/${user}/debts/${v4()}`).set({totalDebtAmount: num, name: _name.value, timeStamp: Date.now(), currentAmountPaid: parseInt(_current.value), startAmount: parseInt(_total.value)})
        _total.value = null;
        _current.value = null;
        _name.value = null;
    }

    function deleteThisDebt(id){
        let user = firebase.auth().currentUser.uid;
        firebase.database().ref(`users/${user}/debts/${id}`).remove()
    }

    if(props.debts){
        display = Object.keys(props.debts).map(debts => {
            let bgColor;
            let num = ((props.debts[debts].currentAmountPaid / props.debts[debts].startAmount) * 100);
            console.log(num)
            if(num <= 40){
                bgColor = "rgba(255,0,0,0.6)"
            } else if (num > 40 && num < 85){
                bgColor = "rgba(255,165,0,0.6)"
            } else if (num >= 85){
                bgColor = "rgba(30,255,0,0.6)"
            }
            return <div key={debts} className="debts" style={{"backgroundColor": bgColor, "borderBottom": "1px solid black"}}>
                <h3>{props.debts[debts].name}</h3>
                <p>{props.debts[debts].startAmount}</p>
                <p>{props.debts[debts].totalDebtAmount}</p>
                <p>{props.debts[debts].currentAmountPaid}</p>
                <button onClick={() => deleteThisDebt(debts)}>Delete</button>
                <p>Last Updated: {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(props.debts[debts].timeStamp)}</p>
            </div>
        })
    } else {
        display = <div><h3>Add your first debt!</h3></div>
    }

    return(
        <div>
            <hr/>
            <h1>Debts Section</h1>
            {display}
            <form onSubmit={sendDebt}>
                <input placeholder="Name of Debt" ref={value => {_name = value}}/>
                <input type="number" placeholder="Total Debt Amount" ref={value => {_total = value}}/>
                <input type="number" placeholder="Current Amount Paid" ref={value => {_current = value}}/>
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}

export default Debts;
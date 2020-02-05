import React, {useState} from 'react';
import * as firebase from 'firebase';
import '../scss/Debts.scss';
import AddDebt from './AddDebt';

function Debts(props){

    const [addDebtForm, setDebtForm] = useState(false);
    let display;
    let debtForm;

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
            return <div key={debts} className="debts" style={{"backgroundColor": bgColor, "marginBottom": "10px"}}>
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

    if(addDebtForm){
        debtForm = <AddDebt closeDebtForm={() => setDebtForm(false)}/>
    } else {
        debtForm = null;
    }

    return(
        <div className="debtContainer">
            <hr/>
            {debtForm}
            <div className="top">
                <h1>Debts Section</h1>
                <img onClick={() => setDebtForm(true)} className="addDebtButton" src={require('../assets/plus.png')}/>
            </div>
            {display}
        </div>
    )
}

export default Debts;
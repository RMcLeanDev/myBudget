import React, {useState} from 'react';
import * as firebase from 'firebase';
import '../scss/Debts.scss';
import AddDebt from './AddDebt';
import EditDebt from './EditDebt';
import DebtPayment from './DebtPayment';
import DebtPaymentHistory from './DebtPaymentHistory';

function Debts(props){

    const [addDebtForm, setDebtForm] = useState(false);
    const [showDebt, setShowDebt] = useState(false);
    const [editDebtForm, setEditForm] = useState({"state": false, information: null});
    const [debtPaymentForm, setDebtPaymentForm] = useState({"state": false, information: null});

    let display;
    let debtForm;
    let showHide;
    let editForm;
    let paymentForm;

    if(showDebt){
        showHide = <h2 onClick={() => setShowDebt(false)}>Hide</h2>
    } else {
        showHide = <h2 onClick={() => setShowDebt(true)}>Show</h2>
    }

    if(showDebt){
        if(props.debts){
            display = Object.keys(props.debts).map(debts => {
                let bgColor;
                let debt = props.debts[debts];
                let num = ((props.debts[debts].currentAmountPaid / props.debts[debts].totalDebtAmount) * 100);
                let interestChecked;
                if(num <= 40){
                    bgColor = "rgba(255,0,0,0.6)"
                } else if (num > 40 && num < 85){
                    bgColor = "rgba(255,165,0,0.6)"
                } else if (num >= 85){
                    bgColor = "rgba(30,255,0,0.6)"
                }
                if(debt.interest){
                    let newInterestAmount = debt.interestRate / 12 * (debt.totalDebtAmount - debt.currentAmountPaid);
                    // interest is (interest_rate/12 * balance);
                    interestChecked = <div>
                        <p>Your next payment will have: *${newInterestAmount.toFixed(2)} going towards interest!</p>
                        <p>*If you make your payments on time.</p>
                    </div>
                } else {
                    interestChecked = null;
                }
                return <div key={debts} className="debts" style={{"marginBottom": "10px"}}>
                    <div className="debtsInformation">
                        <div>
                            <p>Name</p>
                            <h2>{debt.name}</h2>
                        </div>
                        <div>
                            <p>Total Due:</p>
                            <p>${debt.totalDebtAmount}</p>
                        </div>
                        <div>
                            <p>Remaining:</p>
                            <p>${debt.currentBalance}</p>
                        </div>
                        <div>
                            <p>Amount Paid:</p>
                            <p>${debt.currentAmountPaid}</p>
                        </div>
                        <h3 className="paymentButton" onClick={() => setDebtPaymentForm({"state": true, information: {id: debts, values: debt}})}>Make A Payment</h3>
                        <img className="editButton" src={require('../assets/edit.png')} onClick={() => setEditForm({"state": true, information: {debtItem: debt, id: debts}})}/>
                    </div>
                    <div className="progress">
                        <img src={require('../assets/progressBar.png')}/>
                        <div className="colorBar" style={{"backgroundColor": bgColor, "width": `${num}%`}}/>
                    </div>
                    <div className="payments">
                        <DebtPaymentHistory information={debt}/>
                    </div>
                    {interestChecked}
                </div>
            })
        } else {
            display = <div><h3>Add your first debt!</h3></div>
        }
    }

    if(addDebtForm){
        debtForm = <AddDebt closeDebtForm={() => setDebtForm(false)}/>
    } else {
        debtForm = null;
    }

    if(editDebtForm.state){
        editForm = <EditDebt information={editDebtForm.information} closeEditDebtForm={() => setEditForm({"state": false, information: null})}/>
    } else {
        editForm = null;
    }

    if(debtPaymentForm.state){
        paymentForm = <DebtPayment information={debtPaymentForm.information} closeDebtPaymentForm={() => setDebtPaymentForm({"state": false, information: null})}/>
    } else {
        paymentForm = null;
    }

    return(
        <div className="debtContainer">
            {debtForm}
            {editForm}
            {paymentForm}
            <div className="top">
                {showHide}
                <h1>Debts</h1>
                <img onClick={() => setDebtForm(true)} className="addDebtButton" src={require('../assets/plus.png')}/>
            </div>
            {display}
        </div>
    )
}

export default Debts;
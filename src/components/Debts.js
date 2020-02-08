import React, {useState} from 'react';
import * as firebase from 'firebase';
import '../scss/Debts.scss';
import AddDebt from './AddDebt';
import EditDebt from './EditDebt';

function Debts(props){

    const [addDebtForm, setDebtForm] = useState(false);
    const [showDebt, setShowDebt] = useState(true);
    const [editDebtForm, setEditForm] = useState({"state": false, information: null});

    let display;
    let debtForm;
    let showHide;
    let editForm;

    function deleteThisDebt(id){
        let user = firebase.auth().currentUser.uid;
        firebase.database().ref(`users/${user}/debts/${id}`).remove()
    }

    if(showDebt){
        showHide = <h2 onClick={() => setShowDebt(false)}>Hide</h2>
    } else {
        showHide = <h2 onClick={() => setShowDebt(true)}>Show</h2>
    }

    if(showDebt){
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
                return <div key={debts} className="debts" style={{"marginBottom": "10px"}}>
                    <div className="debtsInformation">
                        <div>
                            <p>Name</p>
                            <h2>{props.debts[debts].name}</h2>
                        </div>
                        <div>
                            <p>Total Due:</p>
                            <p>${props.debts[debts].startAmount}</p>
                        </div>
                        <div>
                            <p>Remaining:</p>
                            <p>${props.debts[debts].totalDebtAmount}</p>
                        </div>
                        <div>
                            <p>Amount Paid:</p>
                            <p>${props.debts[debts].currentAmountPaid}</p>
                        </div>
                        <h2>Make A Payment</h2>
                        <img src={require('../assets/edit.png')} onClick={() => setEditForm({"state": true, information: props.debts[debts]})}/>
                    </div>
                    <div className="progress">
                        <img src={require('../assets/progressBar.png')}/>
                        <div className="colorBar" style={{"backgroundColor": bgColor, "width": `${num}%`}}/>
                    </div>
                    <p>Last Updated: {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(props.debts[debts].timeStamp)}</p>
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
        console.log(editDebtForm)
    } else {
        editForm = null;
    }

    return(
        <div className="debtContainer">
            <hr/>
            {debtForm}
            {editForm}
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
import React, {useState} from "react";
import '../../scss/Savings.scss';
import AddSavings from './AddSavings';

function Savings(props){

    let display;
    let showHide;
    let savingsForm;

    const [showSavings, setShowSavings] = useState(false);
    const [addSavingsForm, setSavingsForm] = useState(false);

    if(showSavings){
        if(props.savings){
            display = Object.keys(props.savings).map(savings => {
                let saving = props.savings[savings]
                return <div key={savings}>
                    <h2>Name</h2>
                    <h2>{saving.name}</h2>
                    <h2>Target</h2>
                    <h2>{saving.targetGoal}</h2>
                    <h2>Current Saved</h2>
                    <h2>{saving.currentSaved}</h2>
                    <h3 className="paymentButton" >Add Money</h3>
                    <img className="editButton" src={require('../../assets/edit.png')} />
                </div>
            })
        } else {
            display = <h3>Add your first savings item!</h3>
        }
    }

    if(showSavings){
        showHide = <h2 onClick={() => setShowSavings(false)}>Hide</h2>
    } else {
        showHide = <h2 onClick={() => setShowSavings(true)}>Show</h2>
    }

    if(addSavingsForm){
        savingsForm = <AddSavings closeSavingsForm={() => setSavingsForm(false)}/>
    } else {
        savingsForm = null;
    }

    return (
        <div>
            {savingsForm}
            <div className="top">
                {showHide}
                <h1>Savings</h1>
                <img onClick={() => setSavingsForm(true)} className="addDebtButton" src={require('../../assets/plus.png')}/>
            </div>
            {display}
        </div>
    )
}

export default Savings;
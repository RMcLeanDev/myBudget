import React, {useState} from "react";
import '../../scss/Savings.scss';
import AddSavings from './AddSavings';

function Savings(props){

    let display;
    let showHide;
    let savingsForm;

    const [showSavings, setShowSavings] = useState(false);
    const [addSavingsForm, setSavingsForm] = useState(false);

    if(props.savings){
        display = <h3>true</h3>
    } else {
        display = <h3>Add your first savings item!</h3>
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
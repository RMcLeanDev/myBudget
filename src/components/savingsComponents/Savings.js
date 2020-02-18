import React, {useState} from "react";
import '../../scss/Savings.scss';

function Savings(props){

    let display;
    let showHide;

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

    return (
        <div>
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
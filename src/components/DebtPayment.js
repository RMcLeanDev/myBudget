import React from 'react';

function DebtPayment(){

    function debtPayment(e){
        e.preventDefault()
    }
    
    return(
        <div className="debtPaymentContainer">
            <img src={require("../assets/x.png")} onClick={props.closeEditDebtForm}/>
            <div className="debtPaymentWindow">
                <form onSubmit={debtPayment}>
                    
                    <button type="submit">Enter</button>
                </form>
            </div>
        </div>
    )
}

export default DebtPayment;
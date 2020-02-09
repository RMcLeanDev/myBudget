import React, {useState} from 'react';

function DebtPaymentHistory(props){

    const [showHide, setShowHide] = useState(false);

    let payments;

    if(showHide){
        if(props.information.payments){
            console.log(props.information.payments)
            payments = <div>
                {Object.keys(props.information.payments).map(allPayments => {
                    let currentPayment = props.information.payments[allPayments]
                    return <div>
                        <h4>${currentPayment.amount}</h4>
                        <p>Made on: {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(currentPayment.timeStamp)}</p>
                    </div>
                })}
                <h3 onClick={() => setShowHide(false)}>Hide</h3>
            </div>
        } else {
            payments = <div>
                <h2>No payments have been made</h2>
                <h3 onClick={() => setShowHide(false)}>Hide</h3>
            </div>
        }
    } else {
        payments = <div>
            <h3 onClick={() => setShowHide(true)}>Show Payments</h3>
        </div>
    }

    return(
        <div>
            {payments}
        </div>
    )
}

export default DebtPaymentHistory;
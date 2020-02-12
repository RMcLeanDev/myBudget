import React, {useState} from 'react';
import * as firebase from 'firebase';
import { _instanceWithOptions } from 'firebase-functions/lib/providers/database';

function Budget(){

    const [payments, setPayments] = useState(null)

    console.log(payments);

    let _info = null;

    function sendBudget(e){
        e.preventDefault();
        console.log("send budget function")
    }

    return(
        <div>
            <hr/>
            <h1>Budget Section</h1>
            <hr />
            <form onSubmit={sendBudget}>
                <input placeholder="some Information here" ref={value => {_info = value}}/>
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}

export default Budget;
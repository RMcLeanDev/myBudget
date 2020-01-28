import React, {useEffect, useState} from 'react';
import * as firebase from 'firebase';

function Budget(){

    const [budget, setBudget] = useState(false);

    useEffect(() => {
        let currentUser = firebase.auth().currentUser;
        firebase.firestore().collection('users').doc(currentUser.uid).collection('budget').get().then((snapshot) => {
            if(snapshot.docs.length === 0){
                setBudget(false)
            } else {
                setBudget(snapshot.docs)
                console.log(snapshot.docs)
            }
        })
    }, [])

    let _info = null;

    function sendBudget(e){
        e.preventDefault();
        let currentUser = firebase.auth().currentUser
        firebase.firestore().collection('users').doc(currentUser.uid).collection('budget').doc(_info.value).set({start: _info.value})
    }

    return(
        <div>
            <h1>Budget Section</h1>
            <form onSubmit={sendBudget}>
                <input placeholder="some Information here" ref={value => {_info = value}}/>
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}

export default Budget;
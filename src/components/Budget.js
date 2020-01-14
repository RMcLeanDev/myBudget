import React from 'react';
import * as firebase from 'firebase';

function Budget(props){

    let _info = null;

    function setBudget(e){
        e.preventDefault();
        let user = firebase.auth().currentUser
        firebase.firestore().collection('users').doc(user.uid).collection('budget').doc(_info.value).set({start: _info.value})
    }

    return(
        <div>
            <h1>Budget Section</h1>
            <form onSubmit={setBudget}>
                <input placeholder="some Information here" ref={value => {_info = value}}/>
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}

export default Budget;
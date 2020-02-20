import React from 'react';
import * as firebase from 'firebase';
import '../../scss/AddSavings.scss';
import '../../scss/CloseButton.scss';

function AddSavings(props){

    let _name = null;
    let _target = null;
    let _current = null;

    function addNewSavings(e){
        e.preventDefault();
        let user = firebase.auth().currentUser.uid;
        firebase.database().ref(`users/${user}/savings/${_name.value}`).set({name: _name.value, targetGoal: _target.value, currentSaved: _current.value}).catch(error => {
            console.log(error);
        })
    }

    return(
        <div className="savingsFormContainer">
            <img className="closeButton" src={require("../../assets/x.png")} onClick={props.closeSavingsForm}/>
            <div className="savingsFormSection">
                <h1>Add new savings item</h1>
                <form onSubmit={addNewSavings}>
                    <p>Name</p>
                    <input placeholder="ex: car" ref={value => {_name = value}}/>
                    <p>Target Saving Goal</p>
                    <input placeholder="ex: 5000 = $5000" ref={value => {_target = value}}/>
                    <p>Current Amount Saved Up</p>
                    <input placeholder="ex: 50 = $50" ref={value => {_current = value}} />
                    <br />
                    <button type="submit">Add New Saving Plan</button>
                </form>
            </div>
        </div>
    )
}

export default AddSavings;
import React from 'react';
import * as firebase from 'firebase';
import '../../scss/AddSavings.scss';
import '../../scss/CloseButton.scss';
import {v4} from 'uuid';

function AddSavings(props){

    let _name = null;
    let _target = null;
    let _current = null;

    function addNewSavings(e){
        e.preventDefault();
        let user = firebase.auth().currentUser.uid;
        firebase.database().ref(`users/${user}/savings/${v4()}`).set({name: _name.value, targetGoal: _target.value, currentSaved: _current.value}).catch(error => {
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
                    <input placeholder="ex: car" required ref={value => {_name = value}}/>
                    <p>Target Saving Goal</p>
                    <input value="0" ref={value => {_target = value}}/>
                    <p>Current Amount Saved Up</p>
                    <input value="0" ref={value => {_current = value}} />
                    <br />
                    <button type="submit">Add New Saving Plan</button>
                </form>
            </div>
        </div>
    )
}

export default AddSavings;
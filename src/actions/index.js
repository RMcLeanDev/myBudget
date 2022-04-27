import constants from './../constants';
import firebase from 'firebase/compat/app';
import {store} from './../index';
import "firebase/compat/auth";
import "firebase/compat/database";

const {types, firebaseConfig} = constants;

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    console.log(user.uid)
    firebase.database().ref(`users/${user.uid}`).on('value', snapshot => {
      if(snapshot.val()){
        store.dispatch(authUserTrue());
      } else {
        firebase.database().ref(`users/${user.uid}`).set({"status": "active"})
      }
    })
  } else {
    store.dispatch(authUserFalse());
  }
})

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})

export const authUserTrue = () => ({
  type: types.AUTH_USER_TRUE
})

export const authUserFalse = () => ({
  type: types.AUTH_USER_FALSE
})
  
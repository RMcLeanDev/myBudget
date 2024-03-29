import constants from './../constants';
import firebase from 'firebase/compat/app';
import {store} from './../index';
import "firebase/compat/auth";
import "firebase/compat/database";

const {types, firebaseConfig} = constants;

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    firebase.database().ref(`users/${user.uid}`).on('value', snapshot => {
      if(snapshot.val()){
        store.dispatch(setUserInfo(snapshot.val()));
        store.dispatch(authUserTrue());
        let info = snapshot.val();
        Object.keys(info.messageIDs).map(info => {
          console.log(info)
        })
      } else {
        
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

export const setUserInfo = (info) => ({
  type: types.SET_USER_INFO,
  info
})

export const dumpUserInfo = () => ({
  type: types.DUMP_USER_INFO
})
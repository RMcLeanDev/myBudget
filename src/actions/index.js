import constants from './../constants';
import * as firebase from 'firebase/app';
import {store} from './../index';
const {types, firebaseConfig} = constants;

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    store.dispatch(authUserTrue());
    db.collection('users').doc(user.uid).get().then((snapshot) => {
      store.dispatch(setUserInformation(snapshot.data()));
      if(snapshot.data()){
      } else {
        console.log("loading")
      }
    })
  } else {
    store.dispatch(authUserFalse());
    store.dispatch(dumpUserInformation());
  }
})

export const authUserTrue = () => ({
  type: types.AUTH_USER_TRUE
})

export const authUserFalse = () => ({
  type: types.AUTH_USER_FALSE
})

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})

export const setUserInformation = (information) => ({
  type: types.SET_USER_INFORMATION,
  information
})

export const dumpUserInformation = () => ({
  type: types.DUMP_USER_INFORMATION
})

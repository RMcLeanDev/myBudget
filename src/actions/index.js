import constants from './../constants';
import * as firebase from 'firebase/app';
import {store} from './../index';
const {types, firebaseConfig} = constants;

firebase.initializeApp(firebaseConfig);
firebase.firestore().collection('users').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data())
  })
})

firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    store.dispatch(authUserTrue());
  } else {
    store.dispatch(authUserFalse());
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

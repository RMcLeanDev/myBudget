import constants from './../constants';
import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import {store} from './../index';
const {types, firebaseConfig} = constants;

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    console.log("user is logged in");
  } else {
    console.log("no user is logged in");
  }
})

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})

import constants from './../constants';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database";

const {types, firebaseConfig} = constants;

// firebase.initializeApp(firebaseConfig);

export const testFunction = () => ({
    type: types.TEST_FUNCTION
  })
  
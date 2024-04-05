import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig ={
    apiKey: "AIzaSyCIu2Eb76uc2zl4VDy65siX_Eu4YSTkVRM",
  authDomain: "react-native-course-d7fba.firebaseapp.com",
  databaseURL: "https://react-native-course-d7fba-default-rtdb.firebaseio.com",
  projectId: "react-native-course-d7fba",
  storageBucket: "react-native-course-d7fba.appspot.com",
  messagingSenderId: "985104482340",
  appId: "1:985104482340:web:a9eb9d6d344bf30d5758b1",
  measurementId: "G-8H5RMFCV0P"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
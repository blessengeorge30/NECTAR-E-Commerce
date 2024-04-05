import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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
 
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
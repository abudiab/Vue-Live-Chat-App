import firebase from "firebase";
import firestore from "firebase/firestore";
import analytics from "firebase/analytics";

// Your web app's Firebase configuration, fill from your firebase console.
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// Initialize Firebase
const friebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default friebaseApp.firestore();

import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyA13gQqxNEQ3Fwck3y4U11RuKEMrdHQ8a4",
  authDomain: "utilisateurs-ex4.firebaseapp.com",
  databaseURL: "https://utilisateurs-ex4-default-rtdb.firebaseio.com",
  projectId: "utilisateurs-ex4",
  storageBucket: "utilisateurs-ex4.appspot.com",
  messagingSenderId: "111000932832",
  appId: "1:111000932832:web:125dcd2b7ce37de4ab9b85"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();

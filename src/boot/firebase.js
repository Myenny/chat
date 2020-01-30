// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDnVB_RwEmxn3DN8WP3DJEgWhJirDkoWsI",
  authDomain: "chat-idk.firebaseapp.com",
  databaseURL: "https://chat-idk.firebaseio.com",
  projectId: "chat-idk",
  storageBucket: "chat-idk.appspot.com",
  messagingSenderId: "326186455376",
  appId: "1:326186455376:web:2343b826cc6630dc951c55"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb }


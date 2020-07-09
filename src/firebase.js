

const firebase = require("firebase/app")
// Required for side-effects
require("firebase/firestore");
require("firebase/auth");
var firebaseConfig = {
  apiKey: "AIzaSyAhzSbfA5boPE9lTJQ9MhQQIzlkL5fUIVE",
  authDomain: "database2-68526.firebaseapp.com",
  databaseURL: "https://database2-68526.firebaseio.com",
  projectId: "database2-68526",
  storageBucket: "database2-68526.appspot.com",
  messagingSenderId: "712365682187",
  appId: "1:712365682187:web:86d6dd6ab39aca9c51e10e",
  measurementId: "G-88D6CEJNMG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var auth = firebase.auth()




export { firebase, db as default, auth };

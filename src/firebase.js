import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxJI7vVuwUOL2T1UPvCSsxcyb1t9Ig2yU",
  authDomain: "ama-clone-a1fd0.firebaseapp.com",
  projectId: "ama-clone-a1fd0",
  storageBucket: "ama-clone-a1fd0.appspot.com",
  messagingSenderId: "570403482488",
  appId: "1:570403482488:web:35a8dcd9afbc87d72ff68d",
  measurementId: "G-75MQLEGNQ0"
};

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
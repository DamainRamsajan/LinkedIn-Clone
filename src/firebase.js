import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAwXWDot-GS6MzV9KUa44nl8q_vYz6BeE4",
    authDomain: "linkedin-clone-d81cb.firebaseapp.com",
    projectId: "linkedin-clone-d81cb",
    storageBucket: "linkedin-clone-d81cb.appspot.com",
    messagingSenderId: "1088430818431",
    appId: "1:1088430818431:web:9daa06c134dd335dd56b4a"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};

  
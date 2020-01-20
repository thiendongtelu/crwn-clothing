import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBxMvTy5eiryRPrp8vVpVIgjk4btnbxiY4",
    authDomain: "my-project-898ce.firebaseapp.com",
    databaseURL: "https://my-project-898ce.firebaseio.com",
    projectId: "my-project-898ce",
    storageBucket: "my-project-898ce.appspot.com",
    messagingSenderId: "601841700645",
    appId: "1:601841700645:web:3464b8ab0efcc6cef494cc",
    measurementId: "G-BB4Y9TYWNK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'});
  export const signInWithGoogle = () =>auth.signInWithPopup(provider);

  export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAXGiuKViyrdh7db8033Q5ZRa0ez_ImAn0",
  authDomain: "stranger-store-db.firebaseapp.com",
  databaseURL: "https://stranger-store-db.firebaseio.com",
  projectId: "stranger-store-db",
  storageBucket: "",
  messagingSenderId: "926453198934",
  appId: "1:926453198934:web:29e00f3ffbb584b1"
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

googleProvider.setCustomParameters({
  'prompt': 'select_account'
});
fbProvider.setCustomParameters({
  'prompt': 'select_account'
});



export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFB = () => auth.signInWithPopup(fbProvider);
export const signInWithGithub = () => auth.signInWithPopup(githubProvider);

export default firebase;
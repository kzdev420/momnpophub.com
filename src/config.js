import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDm2zfZS1UaZ0yq-DJqGfnLSHnfTVh8uKM",
  authDomain: "momnpophub-test.firebaseapp.com",
  databaseURL: "https://momnpophub-test.firebaseio.com",
  projectId: "momnpophub-test",
  storageBucket: "momnpophub-test.appspot.com",
  messagingSenderId: "866510338071",
  appId: "1:866510338071:web:2a9910e33ef7c38e"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;

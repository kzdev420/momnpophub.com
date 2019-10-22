import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCp7VSDbSyTz30h3mlPs6WvPkbiJTvuQNA",
    authDomain: "momnpophub-dev-qa.firebaseapp.com",
    databaseURL: "https://momnpophub-dev-qa.firebaseio.com",
    projectId: "momnpophub-dev-qa",
    storageBucket: "momnpophub-dev-qa.appspot.com",
    messagingSenderId: "745983398155",
    appId: "1:745983398155:web:267d03640913da077f120e",
    measurementId: "G-B5DYGP70DJ"
};

var firebaseApp = firebase.initializeApp(firebaseConfig);
const  database = firebaseApp.database();
export default database;
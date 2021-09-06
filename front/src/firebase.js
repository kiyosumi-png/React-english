import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyAVJNsBXomknRFhxzrlt964eWWIuyxJSK4',
    authDomain: 'useful-english-68bf4.firebaseapp.com',
    projectId: 'useful-english-68bf4',
    storageBucket: 'useful-english-68bf4.appspot.com',
    messagingSenderId: '1053134111648',
    appId: '1:1053134111648:web:f42d863e8d47c16f3cdac5',
    measurementId: 'G-ZN5SZY1TES',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default firebaseApp;
export { db };

import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAVJNsBXomknRFhxzrlt964eWWIuyxJSK4',
    authDomain: 'useful-english-68bf4.firebaseapp.com',
    databaseURL: 'https://useful-english-68bf4.firebaseio.com',
    projectId: 'useful-english-68bf4',
    storageBucket: 'useful-english-68bf4.appspot.com',
    messagingSenderId: '1053134111648',
    appId: '1:1053134111648:web:f42d863e8d47c16f3cdac5',
    measurementId: 'G-ZN5SZY1TES',
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
export default app;

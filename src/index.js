import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

firebase.initializeApp({
    apiKey: "AIzaSyCXw7eNmA21apoKUs_1bHgKM92MDI7fRfs",
    authDomain: "santiagram-169a5.firebaseapp.com",
    databaseURL: "https://santiagram-169a5.firebaseio.com",
    storageBucket: "santiagram-169a5.appspot.com",
    messagingSenderId: "494932562843"
});
ReactDOM.render(
<App/>,
  document.getElementById('root')
);

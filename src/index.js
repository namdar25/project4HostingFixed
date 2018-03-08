import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyCkthZZM_PYT6w8fxU1WoCRlBcwsUzYOqY",
    authDomain: "project-4-s.firebaseapp.com",
    databaseURL: "https://project-4-s.firebaseio.com",
    projectId: "project-4-s",
    storageBucket: "project-4-s.appspot.com",
    messagingSenderId: "1077680492467"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

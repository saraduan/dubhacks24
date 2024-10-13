import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC2GYgfDe02N5dO0063qS-jOe4ipFxz0P0",
  authDomain: "group7-1d74f.firebaseapp.com",
  databaseURL: "https://group7-1d74f-default-rtdb.firebaseio.com",
  projectId: "group7-1d74f",
  storageBucket: "group7-1d74f.appspot.com",
  messagingSenderId: "440328570242",
  appId: "1:440328570242:web:4f63dc2e7e133064a7fb9b"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export {db}

console.log(app)

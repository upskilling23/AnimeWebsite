// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg42mW9GE2la3WTzLWSfbouGCt9eoOj8o",
  authDomain: "serieshouse-dfd7b.firebaseapp.com",
  projectId: "serieshouse-dfd7b",
  storageBucket: "serieshouse-dfd7b.appspot.com",
  messagingSenderId: "163794483343",
  appId: "1:163794483343:web:d9652740d42342b2cc58fa",
  measurementId: "G-ZQQ1M2LTSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
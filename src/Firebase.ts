// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG9DwNA7HXQTKhlAXH2gT8EfQVT235m1g",
  authDomain: "drus-dev.firebaseapp.com",
  projectId: "drus-dev",
  storageBucket: "drus-dev.appspot.com",
  messagingSenderId: "833336338139",
  appId: "1:833336338139:web:f878fdd0062549a2480efe",
  measurementId: "G-B5PDM2V04J"
};

// Initialize Firebase
const fbapp = initializeApp(firebaseConfig);
const fbanalytics = getAnalytics(fbapp);

export {fbapp, fbanalytics};
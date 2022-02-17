// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe4mJjfAb4IVkN-pdo8oMudx6yFf_5vi4",
  authDomain: "airbnb-077.firebaseapp.com",
  projectId: "airbnb-077",
  storageBucket: "airbnb-077.appspot.com",
  messagingSenderId: "878331660496",
  appId: "1:878331660496:web:ea1ee9ecaa624a429876d5",
  measurementId: "G-SQBCG5CJ71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
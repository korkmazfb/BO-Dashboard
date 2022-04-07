import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyDkfoP0fLTBRuK4aCbHZQsLgSHeDnHaMeQ",
    authDomain: "login-68184.firebaseapp.com",
    projectId: "login-68184",
    storageBucket: "login-68184.appspot.com",
    messagingSenderId: "937758035093",
    appId: "1:937758035093:web:4e9609598af187eeb9df9c",
    measurementId: "G-4EXSVEVR7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
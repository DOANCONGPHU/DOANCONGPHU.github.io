// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getAuth, signInUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB09Si8-lWTsi6nHQsVjWogfcjcV7rWTKY",
  authDomain: "shop888-5cda0.firebaseapp.com",
  databaseURL: "https://shop888-5cda0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shop888-5cda0",
  storageBucket: "shop888-5cda0.appspot.com",
  messagingSenderId: "705687484113",
  appId: "1:705687484113:web:de81af255a9ef2020e37f0",
  measurementId: "G-Z3QCT0J9VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert("Login...")
        window.location.href = "index.html"
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    })

})
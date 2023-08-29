import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhty6gin7fREZ6wgY3qAjDS5bflDYsXFQ",
  authDomain: "test-3cd1c.firebaseapp.com",
  databaseURL: "https://test-3cd1c-default-rtdb.firebaseio.com",
  projectId: "test-3cd1c",
  storageBucket: "test-3cd1c.appspot.com",
  messagingSenderId: "1002535204986",
  appId: "1:1002535204986:web:e01e53e65c5d1ca533e3c3",
  measurementId: "G-91GW9MGT8X",
};

// Initialize Firebase and more
const app = initializeApp(firebaseConfig);
var database = getDatabase(app);
var auth = getAuth(app);

document.getElementById("create-user").addEventListener("click", function () {
  const reg_email = document.getElementById("reg-email").value;
  const reg_password = document.getElementById("reg-password").value;
  createUserWithEmailAndPassword(auth, reg_email, reg_password)
    .then((userCredential) => {
      alert("successfuly created an account");
      document.getElementById("login-page").style.display = "block";
      document.getElementById("register-page").style.display = "none";
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);

      // ..
    });
});
document.getElementById("login").addEventListener("click", function () {
  localStorage.clear();
  const cart_name = document.getElementById("cart-name").value;
  const login_email = document.getElementById("login-email").value;
  localStorage.setItem("user_name", login_email);
  localStorage.setItem("cart_name", cart_name);
  var username = localStorage.getItem("user_name");
  const login_password = document.getElementById("login-password").value;
  signInWithEmailAndPassword(auth, login_email, login_password)
    .then((userCredential) => {
      alert("successfuly login to account");
      window.location.href = "main.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);

      // ..
    });
});

document.getElementById("register-btn").addEventListener("click", function () {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("register-page").style.display = "block";
});

document.getElementById("already-login").addEventListener("click", function () {
  document.getElementById("login-page").style.display = "block";
  document.getElementById("register-page").style.display = "none";
});

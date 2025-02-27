import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js';

// Firebase Config (put your actual config here)
const firebaseConfig = {
    apiKey: "AIzaSyBxbrA9kvfNU6bGu4rObxhnhqDvzvrgihM",
    authDomain: "maths-fcd41.firebaseapp.com",
    projectId: "maths-fcd41",
    storageBucket: "maths-fcd41.appspot.com",
    messagingSenderId: "242227535073",
    appId: "1:242227535073:web:3f76c5c57f7aa600036ba0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// HTML Elements
const dashboardSection = document.getElementById("dashboardSection");
const enrollSection = document.getElementById("enrollSection");
const goToDashboardBtn = document.getElementById("goToDashboardBtn");

// Check if user is logged in or not
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is logged in - show Dashboard button, hide Enroll section
        dashboardSection.style.display = "block";
        enrollSection.style.display = "none";
    } else {
        // User is NOT logged in - hide Dashboard button, show Enroll section
        dashboardSection.style.display = "none";
        enrollSection.style.display = "block";
    }
});

// Go to Dashboard button logic
if (goToDashboardBtn) {
    goToDashboardBtn.addEventListener("click", () => {
        window.location.href = "dashboard.html";  // Change to your actual dashboard file
    });
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQc2Ii13XxRwxu6JERX4xd01EQplnIHWw",
  authDomain: "whereisit-90953.firebaseapp.com",
  projectId: "whereisit-90953",
  storageBucket: "whereisit-90953.firebasestorage.app",
  messagingSenderId: "987668922197",
  appId: "1:987668922197:web:4af78065f9bbeace30f9dc"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
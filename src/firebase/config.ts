// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxd2sdpF5YgnMWy0d9IRLvMcNKXA_8UXc",
  authDomain: "terpel-23959.firebaseapp.com",
  projectId: "terpel-23959",
  storageBucket: "terpel-23959.firebasestorage.app",
  messagingSenderId: "145330878313",
  appId: "1:145330878313:web:13cd46ef6fb1082f31aff8",
  measurementId: "G-JER5FVCNFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const projectAuth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTCQ8-EW-ecx4Jh5rbaKC2fkZbmmxWWAQ",
  authDomain: "learner-edge.firebaseapp.com",
  projectId: "learner-edge",
  storageBucket: "learner-edge.appspot.com",
  messagingSenderId: "1066497746539",
  appId: "1:1066497746539:web:7a4898340a84994513332e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
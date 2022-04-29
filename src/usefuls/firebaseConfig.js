// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2emYJbDPMBD7LZIlK3xrtW-FdqQSeErQ",
  authDomain: "sonidoacutec.firebaseapp.com",
  projectId: "sonidoacutec",
  storageBucket: "sonidoacutec.appspot.com",
  messagingSenderId: "828423414569",
  appId: "1:828423414569:web:584bda287576245ca8cd38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
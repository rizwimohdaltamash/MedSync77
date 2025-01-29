// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyB3CutnYVhd000khy6ujFve8DcfWCfZOA0",
    authDomain: "bookify-ce1ff.firebaseapp.com",
    projectId: "bookify-ce1ff",
    storageBucket: "bookify-ce1ff.appspot.com",
    messagingSenderId: "200197035531",
    appId: "1:200197035531:web:1888e33ee859ad3665990e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const fireDB =getFirestore(app);
const auth =getAuth(app);
const storage = getStorage(app);

export {fireDB,auth,storage};
// import firebase from "firebase";
import  {initializeApp}  from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDLni0GEYWm-hXLnI8NqpLtmb1atUr2EvQ",
  authDomain: "linkedin-clone-44d0a.firebaseapp.com",
  projectId: "linkedin-clone-44d0a",
  storageBucket: "linkedin-clone-44d0a.appspot.com",
  messagingSenderId: "125151356493",
  appId: "1:125151356493:web:6ba44416df31eb0d0d9e04",
  measurementId: "G-3YS2H2G670",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default  db ;

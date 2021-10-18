// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import  firebase  from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANbYMOI6J4Wjwz-rLgkSCr5UTDAGe0GZs",
  authDomain: "dewdropdemo.firebaseapp.com",
  projectId: "dewdropdemo",
  storageBucket: "dewdropdemo.appspot.com",
  messagingSenderId: "270093346062",
  appId: "1:270093346062:web:d2306d6a2b0cde822d235f"
};



if(!firebase.getApps.length){

    firebase.initializeApp(firebaseConfig);

}
const firestore=firebase.firestore();
export { firestore };
// try{
//     // Initialize Firebase
// const app= initializeApp(firebaseConfig);

// // Firebase.initializeApp(firebaseConfig)
// }catch(err){
//     if(!/already exists/.test(err.message)){
//         console.error('Firebase initialization error', err.stack)
//     }
// }

const fire = Firebase;
export default fire ;
    

 
import firebase from "firebase";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhKmnE7CmSwKZpyx5NJHaE_oge612Vxug",
  authDomain: "facebook-clone-76c6e.firebaseapp.com",
  projectId: "facebook-clone-76c6e",
  storageBucket: "facebook-clone-76c6e.appspot.com",
  messagingSenderId: "385236608979",
  appId: "1:385236608979:web:a445fd07001992a9023126",
  measurementId: "G-0HRTWJNH65",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };

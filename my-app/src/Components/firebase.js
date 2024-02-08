import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyB6aC4QXxwOftaLlvzNd6xdiAwIw1emrjE",
    authDomain: "bakery-newsletter.firebaseapp.com",
    projectId: "bakery-newsletter",
    storageBucket: "bakery-newsletter.appspot.com",
    messagingSenderId: "434484050531",
    appId: "1:434484050531:web:91f3d0b527e2067146d656"
  };
  const firebaseapp=firebase.initializeApp(firebaseConfig)
  const db=firebaseapp.firestore()
  export default db
  
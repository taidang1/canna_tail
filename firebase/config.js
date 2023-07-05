import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCVqtEbcvYU8v_yRxbSgUHCV1b1o9XLXyE",
    authDomain: "ninja-f2649.firebaseapp.com",
    projectId: "ninja-f2649",
    storageBucket: "ninja-f2649.appspot.com",
    messagingSenderId: "343013900334",
    appId: "1:343013900334:web:92f1c414e69db789859fbf"
};

// init firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
        apiKey: "AIzaSyDiqpTckYW8TbgffglnafjTOpWt_O9TZoc",
        authDomain: "slack-clone-99361.firebaseapp.com",
        projectId: "slack-clone-99361",
        storageBucket: "slack-clone-99361.appspot.com",
        messagingSenderId: "1084460728568",
        appId: "1:1084460728568:web:011573cc147edb5a99bb0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider, db};
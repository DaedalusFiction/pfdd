import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDu8K1HHiiuuCeIPa5rMhtcI__bpQfZgFM",
    authDomain: "pfdd-2d1d9.firebaseapp.com",
    projectId: "pfdd-2d1d9",
    storageBucket: "pfdd-2d1d9.appspot.com",
    messagingSenderId: "947364237657",
    appId: "1:947364237657:web:739f53144647511b473c48",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

const storage = getStorage();

export { app, db, storage, provider, auth };

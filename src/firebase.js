import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
import "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyAfmIs90UwZ8xidlqtZVzLbNOXOFJwvT48",
    authDomain: "uniaonefamily-3cb8b.firebaseapp.com",
    projectId: "uniaonefamily-3cb8b",
    storageBucket: "uniaonefamily-3cb8b.appspot.com",
    messagingSenderId: "4266424679",
    appId: "1:4266424679:web:e467645384bc61caea57c2"
};
//init firebase app
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);




export default app;



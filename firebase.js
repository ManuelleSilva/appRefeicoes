import {initializeApp} from "firebase/app";
import{getFirestore}from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig ={
    apiKey: "AIzaSyA_of21Pf9F8oExHx85zmHP9RvnS022Qgw",
    authDomain: "apprefeicoeselle.firebaseapp.com",
    projectId: "apprefeicoeselle",
    storageBucket: "apprefeicoeselle.appspot.com",
    messagingSenderId: "561866932416",
    appId: "1:561866932416:web:a1b31060d7d3aac25bad25"
}

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app); 
export { signInWithEmailAndPassword, onAuthStateChanged };
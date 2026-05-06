import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9Tnxk5TmhEtNtWrt9lB7R9xaYyfuE84I",
  authDomain: "zylo-d93ee.firebaseapp.com",
  projectId: "zylo-d93ee",
  storageBucket: "zylo-d93ee.firebasestorage.app",
  messagingSenderId: "1005829860030",
  appId: "1:1005829860030:web:b60362b9991a0e11da4cef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

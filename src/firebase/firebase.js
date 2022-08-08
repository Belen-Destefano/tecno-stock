
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAl6WEkChrioRMetIpXpOqJB9F6I62X3Zg",
  authDomain: "tecnostock-93800.firebaseapp.com",
  projectId: "tecnostock-93800",
  storageBucket: "tecnostock-93800.appspot.com",
  messagingSenderId: "154773231856",
  appId: "1:154773231856:web:a74c16da102cbe65a68a35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
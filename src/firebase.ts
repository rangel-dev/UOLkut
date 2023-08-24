import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBw7FexKHhPw5N_moFNyf1O5UeXNEF1X8s",
  authDomain: "uolkut-7b008.firebaseapp.com",
  projectId: "uolkut-7b008",
  storageBucket: "uolkut-7b008.appspot.com",
  messagingSenderId: "983405516041",
  appId: "1:983405516041:web:5397e85e1d756209542fd8",
  measurementId: "G-HX1EHLHYGF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
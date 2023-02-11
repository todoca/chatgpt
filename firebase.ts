import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_8gGzjSgviXt5A1LPdFZBK64Oz0Lc3Ds",
  authDomain: "chatgpt-todoca.firebaseapp.com",
  projectId: "chatgpt-todoca",
  storageBucket: "chatgpt-todoca.appspot.com",
  messagingSenderId: "618889190661",
  appId: "1:618889190661:web:d795862128adbccf772b6c",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

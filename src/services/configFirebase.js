import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAx9eQXb_m_5_Xm7OVyiex9wJxLaLRDzKk",
  authDomain: "muebles-44432.firebaseapp.com",
  projectId: "muebles-44432",
  storageBucket: "muebles-44432.appspot.com",
  messagingSenderId: "401596709408",
  appId: "1:401596709408:web:a389663e83c3a107981a45"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
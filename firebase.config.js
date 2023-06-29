import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwrXGURK_c7LoQT5Ffobfh3GUcVacKNwU",
  authDomain: "food-delivery-852c3.firebaseapp.com",
  databaseURL: "https://food-delivery-852c3-default-rtdb.firebaseio.com",
  projectId: "food-delivery-852c3",
  storageBucket: "food-delivery-852c3.appspot.com",
  messagingSenderId: "127682975449",
  appId: "1:127682975449:web:c0275cb6f042877e7bd0c8",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

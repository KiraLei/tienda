import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDsNQEqV_kzVXLM27fNG8izqUZ4LkeN5nE",
  authDomain: "kirastore-296ac.firebaseapp.com",
  projectId: "kirastore-296ac",
  storageBucket: "kirastore-296ac.appspot.com",
  messagingSenderId: "494106352471",
  appId: "1:494106352471:web:93740c523e6ef3ec257c12",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyBPO9eXCakIln8lZKcQeV67SJuSDTK3Vyk",
    authDomain: "huy-chat.firebaseapp.com",
    databaseURL: "https://huy-chat-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "huy-chat",
    storageBucket: "huy-chat.appspot.com",
    messagingSenderId: "735906895441",
    appId: "1:735906895441:web:82456686ce8d3d9af88a70",
    measurementId: "G-YE6H5Y0TYL"
  };
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app();
}

export const auth = firebase.auth();
export const db = firebase.firestore();
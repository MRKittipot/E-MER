import {getAuth} from 'firebase/auth';
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
//import {getAnalytics} from 'firebase/analytics';
import {getDatabase} from 'firebase/database';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { ref, uploadBytes, getStorage, getDownloadURL } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9A4gI87RbGsjejdOCd6BhHSem19hS-9A",
  authDomain: "emer1-29456.firebaseapp.com",
  databaseURL: "https://emer1-29456-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "emer1-29456",
  storageBucket: "emer1-29456.appspot.com",
  messagingSenderId: "254109520523",
  appId: "1:254109520523:web:633569113df4c95b187a8e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getDatabase(app);
//const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const storage = getStorage();

export {db, auth ,storage, ref, uploadBytes, getStorage, getDownloadURL};
export default app;

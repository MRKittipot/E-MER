import {getAuth} from 'firebase/auth';
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
//import {getAnalytics} from 'firebase/analytics';
import {getDatabase} from 'firebase/database';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCA4UdIqgrREIz6KoFI8d6OsESh7XXsIWU',
  authDomain: 'evmprojectse.firebaseapp.com',
  databaseURL:
    'https://evmprojectse-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'evmprojectse',
  storageBucket: 'evmprojectse.appspot.com',
  messagingSenderId: '775274243522',
  appId: '1:775274243522:web:ad20f6dbac8902de06e25b',
  measurementId: 'G-7K6DN4DZ84',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getDatabase(app);
//const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export {db, auth};
export default app;

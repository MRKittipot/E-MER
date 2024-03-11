import React, {createContext, useContext, useEffect, useState} from 'react';
import {where, doc} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  confirmPasswordReset,
} from 'firebase/auth';
import auth from '@react-native-firebase/auth';
import {auth as a, db} from '../config/Firebaseconfig';
import {useNavigation} from '@react-navigation/native';
const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
  const [user, setUser] = useState({});
  const [provider, setProvider] = useState({});
  function logIn(email, password) {
    return signInWithPopup(
      a,
      new firebase.a.EmailAuthProvider(email, password),
    );
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(a, email, password);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(a, email);
  }

  function sendEmailVerify(email) {
    return sendEmailVerification(a, email);
  }

  function resetPassword2(oobCode, newPassword) {
    return confirmPasswordReset(a, oobCode, newPassword);
  }

  function logOut() {
    return signOut(a);
  }
  const emailAuth = a;

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User is signed in:', user.email, user);
        setUser(user);
        setProvider(user.providerData);
        console.log(user.providerData);
        console.log(user);
        console.log(provider);
      } else {
        const unsubscribe = onAuthStateChanged(a, currentuser => {
          if (currentuser) {
            console.log(
              'Auth',
              currentuser.providerData[0].providerId,
              'Provider',
              currentuser,
            );
            setUser(currentuser);
            setProvider(currentuser.providerData[0].providerId);
            console.log(currentuser.providerData[0].providerId);
            console.log('User is signed in:', currentuser.email);
            console.log(provider);
          } else {
            setUser("");
            console.log('no user login');
            
          }
        });
        return unsubscribe;
      }
    });
    return unsubscribe;
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        resetPassword,
        resetPassword2,
        sendEmailVerify,
        emailAuth,
        provider,
      }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

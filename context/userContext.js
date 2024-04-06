import React, {createContext, useContext, useEffect, useState} from 'react';
import {getDatabase, ref, query, equalTo, get} from 'firebase/database';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  confirmPasswordReset,
} from 'firebase/auth';
import {auth as a, db} from '../config/Firebaseconfig';
import {useNavigation} from '@react-navigation/native';

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});
  const [provider, setProvider] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(a, email, password);
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

  const fetchUserData = async () => {
    try {
      if (user) {
        console.log(provider, 'provider');
        if (provider == 'google.com') {
          const Datas = {
            name: user.displayName,
          };
          setUserData(Datas);
          console.log('Datas', Datas);
        } else if (provider == 'password') {
          const userId = user.uid;
          const userRef = ref(db, 'users/' + userId);
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            console.log(userData);
          } else {
            console.log('No data available for this user');
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const findUsersByResponse = async currentUserId => {
    try {
      const usersRef = ref(db, 'users');
      const responseQuery = query(usersRef, equalTo('response', currentUserId));
      const snapshot = await get(responseQuery);
      if (snapshot.exists()) {
        const usersData = snapshot.val();
        console.log(usersData);
      } else {
        console.log('No users found with response equal to', currentUserId);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(a, user => {
      if (user) {
        setUser(user);
        setProvider(user.providerData);
        const Datas = {
          name: user.displayName,
        };
        setUserData(Datas);
        console.log('Datas', Datas);
      } else {
        setUser('');
        console.log('no user login');
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
        emailAuth: a,
        provider,
        userData,
      }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

import React, {createContext, useContext, useEffect, useState} from 'react';
import {where, doc} from 'firebase/firestore';
import {ref, query, equalTo, get} from 'firebase/database';
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
  const [userData, setUserdata] = useState({});
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
  const fetchUserData = async () => {
    try {
      if (user) {
        console.log(provider, 'provider');
        if (provider == 'google.com') {
          const Datas = {
            name: user.displayName,
          };
          setUserdata(Datas);
          console.log('Datas', Datas);
        } else if (provider == 'password') {
          const userId = user.uid;
          const userRef = ref(db, 'users/' + userId);

          // Fetch data for the specified user
          const snapshot = await get(userRef);

          if (snapshot.exists()) {
            // Data retrieved successfully
            const userData = snapshot.val();
            console.log(userData);
            // Now you can use userData as per your requirement
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
      // Reference to the location in the database where user data is stored
      const usersRef = ref(db, 'users');

      // Query to find users with response equal to the provided user ID
      const responseQuery = query(usersRef, equalTo('response', currentUserId));

      // Fetch data based on the query
      const snapshot = await get(responseQuery);

      if (snapshot.exists()) {
        // Data retrieved successfully
        const usersData = snapshot.val();
        console.log(usersData);
        // Now you can use usersData as per your requirement
      } else {
        console.log('No users found with response equal to', currentUserId);
      }
    } catch (error) {
      // An error occurred while fetching data
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User is signed in:', user.email, user);
        setUser(user);
        setProvider(user.providerData);
        console.log(provider);
        const Datas = {
          name: user.displayName,
        };
        setUserdata(Datas);
        console.log('Datas', Datas);
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

            console.log('User is signed in:', currentuser.email);
            console.log(provider);
            console.log(currentuser.uid, 'currentuser');
            findUsersByResponse(currentuser.uid);

            console.log(userData, 'Datas');
          } else {
            setUser('');
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
        userData,
      }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

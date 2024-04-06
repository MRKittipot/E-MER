/*import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth'

export default GoogleonPress = async () => {
    try{
        GoogleSignin.configure({
            offlineAccess:false,
            webClientId:'775274243522-4mkst1obhqfqjcbehj60euk76ocubpph.apps.googleusercontent.com',
            //webClientId:'254109520523-qjonk2795g4rk7sv6u86sru278fmndnk.apps.googleusercontent.com',
            scopes:['profile','email']
        })
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        const {idToken} = await GoogleSignin.signIn();
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
        auth().signInWithCredential(googleCredentials);
        return userInfo
    }catch(error){
        console.log("==>Google Sign in :",error);
        return null
    }
}*/


import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

// Initialize Firebase in your entry point or initialization file
// Example initialization code:
// import firebase from './path/to/firebaseConfig';
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

GoogleSignin.configure({
  offlineAccess: false,
  webClientId: '775274243522-4mkst1obhqfqjcbehj60euk76ocubpph.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
});

export default GoogleonPress = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const { idToken } = userInfo;
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);
    return userInfo;
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('Google sign-in canceled');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('Google sign-in is already in progress');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('Google Play Services is not available');
    } else {
      console.error('Error in Google sign-in:', error);
    }
    return null;
  }
};



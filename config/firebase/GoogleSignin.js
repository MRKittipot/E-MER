import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth'

export default GoogleonPress = async () => {
    try{
        GoogleSignin.configure({
            offlineAccess:false,
            // webClientId:'775274243522-4mkst1obhqfqjcbehj60euk76ocubpph.apps.googleusercontent.com',
            webClientId:'254109520523-qjonk2795g4rk7sv6u86sru278fmndnk.apps.googleusercontent.com',
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
}
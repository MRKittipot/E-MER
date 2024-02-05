import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';

export default _signinWithGoogle = async () => {
    try{
        GoogleSignin.configure({
            offlineAccess:false,
            webClientId:'283829410001-30r20445cs9n0ji5gd18m70aqt2jhmmq.apps.googleusercontent.com',
            scopes:['profile','email']
        })
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        const {idToken} = await GoogleSignin.signIn();
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
        auth().signInWithCredential(googleCredentials);
        return userInfo.idToken;
    }catch(error){
        console.log("==>Google Sign in :",error);
        return null
    }
}
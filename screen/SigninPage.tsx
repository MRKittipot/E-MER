import React, {useState, useEffect} from 'react';
//import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

//import GGLogoutbutton from '../src/components/Login/GoogleLogout';
/*import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';*/
//import GoogleonPress from '../config/firebase/GoogleSignin';
//import {auth} from '../config/Firebaseconfig';
/*import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '@react-native-firebase/auth';
import {useUserAuth} from '../context/userContext';*/
//import axios from 'axios';
import {useUserAuth} from '../context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = ({navigation}) => {

  /*
  //-----Google Signin-----//
  async function googleSignin() {
    await GoogleonPress().then(data => {
      if (!data) {
        console.log('Error : No Datas');
        return;
      }
      console.log('=>Success', data);
      navigation.navigate('Home');
    });
  }

  //----------------------//
  */
 const {user,Signin} = useUserAuth();

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Validation, setValidation] = useState(true);
  const [Data, setData] = useState("")

  const saveToken = async(Token) => {
    try{
      await AsyncStorage.setItem("Token",Token);
      console.log("Data Saved successfully");
      console.log(Data);
      
    }catch(error){
      console.log("Error saving Data :",error);
    }
  };

  const getData = async() =>{
    try{
      const value = await AsyncStorage.getItem( "Token" );
      if (value !== null) {
        // Value was successfully read!
        setData(value)
        console.log("Data received Successfully");
        console.log(value);
        
        navigation.navigate("Profile")
      } else {
        // Value could not be retrieved.
        console.log("Please Login First");
        navigation.navigate('Signin')
      }
    } catch(error) {
      // Error retrieving data
      console.log("Error: ", error);
    }
  };


  
  const handleSigninbyMongodb = async () => {
    try {

      const login = await Signin(Email,Password);
      
      if (login == "Incorrect password" || login == "User Not Found") {
        console.log(
          login
        );
      } else {
        console.log(login);
        saveToken(login.EmerToken);
        navigation.navigate("Profile")
        }
    } catch(error) {
      console.log(error,"frontend error");
    }
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <View>
      <Image
        source={require('../assets/logo_emer-transformed.png')}
        style={style.logo}
      />
      <Text
        style={{
          fontSize: 24,
          color: 'black',
          alignSelf: 'center',
        }}>
        Welcome to <Text style={{color: '#0068c6'}}>EV Emergency</Text>
      </Text>
      <Text style={{color: 'black', fontSize: 12, alignSelf: 'center'}}>
        Runs out? Call EV
      </Text>
      <Text style={style.Inputtitleemail}>Email</Text>
      <TextInput
        keyboardType="email-address"
        style={[
          style.Inputsection,
          {
            borderColor: Validation ? '#A1A2A2' : 'red',
            color: Validation ? '#A1A2A2' : 'red',
          },
        ]}
        value={Email}
        onChangeText={Email => {
          setEmail(Email);
        }}
      />
      <Text style={style.Inputtitlepassword}>Password</Text>
      <TextInput
        keyboardType="default"
        style={[
          style.Inputsection,
          {
            borderColor: Validation ? '#A1A2A2' : 'red',
            color: Validation ? '#A1A2A2' : 'red',
          },
        ]}
        value={Password}
        secureTextEntry
        onChangeText={Password => {
          setPassword(Password);
        }}
      />
      <Text style={{color: Validation ? 'white' : 'red'}}>
        Email and Password doesn't correct
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#0068c6',
          marginLeft: 28,
          marginRight: 28,
          marginTop: 18,
          borderRadius: 20,
          borderColor: '#0068c6',
          borderWidth: 1,
        }}
        onPress={() => handleSigninbyMongodb()}>
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            marginBottom: 12,
            marginTop: 12,
            fontSize: 16,
          }}>
          Sign in
        </Text>
      </TouchableOpacity>
      <View style={{display: 'flex'}}>
        <Text style={style.section}>
          Don't Have an Account, Yet?
          <Text style={{color: 'white'}}>""</Text>
          <Text
            style={{
              color: '#0068C6',
              textDecorationLine: 'underline',
              marginLeft: 5,
            }}
            onPress={() => navigation.navigate('Signup')}>
            Sign Up
          </Text>
        </Text>
      </View>
      <Text style={{alignSelf: 'center', color: '#A1A2A2'}}>
        Can't Remember Password?
        <Text style={{color: 'white'}}>""</Text>
        <Text
          style={{
            color: '#0068C6',
            textDecorationLine: 'underline',
            fontWeight: '300',
          }}
          onPress={() => navigation.navigate('ForgetPage')}>
          Forget password
        </Text>
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  logo: {
    width: 129,
    height: 210,
    resizeMode: 'contain',
    marginTop: 83,
    alignSelf: 'center',
  },
  section: {
    fontWeight: '300',
    alignSelf: 'center',
    marginTop: 18,
  },
  Inputtitleemail: {
    marginLeft: 27,
    fontSize: 14,
    marginTop: 12,
  },
  Inputtitlepassword: {
    marginLeft: 27,
    fontSize: 14,
    marginTop: 18,
  },
  Inputsection: {
    marginLeft: 27,
    marginRight: 27,
    borderColor: '#A1A2A2',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    backgroundColor: 'rgb(255,255,255)',
    elevation: 4,
  },
});

export default Signin;

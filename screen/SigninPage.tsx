import {Link} from '@react-navigation/native';
import React, {useState,useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import GGLogoutbutton from '../src/components/Login/GoogleLogout';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import GoogleonPress from '../config/firebase/GoogleSignin';
import {auth} from '../config/Firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '@react-native-firebase/auth';
import { useUserAuth } from '../context/userContext';
const Signin = ({navigation}) => {
  
  const {user} = useUserAuth()
  async function googleSignin() {
    await GoogleonPress().then(data => {
      if (!data) {
        console.log('Error : No Datas');
        return;
      }
      console.log('=>Success', data);
      navigation.navigate('Profile');
    });
  }

  async function OnhandleSignin(email, password) {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('Sign in! Successful');
        console.log('Email :', email);
        console.log('Password :', password);
        navigation.navigate('Profile');
      })
      .catch(error => {
        console.error(error);
        setValidation(false);
      });
  }

  async function storeuserdata(userdata) {
    try {
      await AsyncStorage.setItem('@userData', JSON.stringify(userdata));
    } catch (error) {
      console.log('Error storing user data: ', error);
    }
  }
  // const {user} = useUserAuth();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Validation, setValidation] = useState(true);

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
        onPress={() => OnhandleSignin(Email, Password)}>
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
      <Text style={{alignSelf: 'center', fontWeight: '300', marginTop: 10}}>
        or
      </Text>
      <TouchableOpacity
        style={{
          marginLeft: 28,
          marginRight: 28,
          marginTop: 10,
          borderRadius: 20,
          borderColor: '#A2A1A1',
          borderWidth: 1,
          backgroundColor: 'rgb(255,255,255)',
        }}
        onPress={() => googleSignin()}>
        <Text
          style={{
            color: '#0068c6',
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 12,
            fontSize: 16,
          }}>
          <Image
            source={require('../assets/google-logo.png')}
            style={{
              width: 20,
              height: 20,
            }}
          />
          Sign in with Google
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
      <Text onPress={() => navigation.navigate('Profile')}>Profile page</Text>
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

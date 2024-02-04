import {Link} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Signin = ({navigation}) => {
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
      <TextInput keyboardType="email-address" style={style.Inputsection} />
      <Text style={style.Inputtitlepassword}>Password</Text>
      <TextInput keyboardType="default" style={style.Inputsection} />
      <TouchableOpacity
        style={{
          backgroundColor: '#0068c6',
          marginLeft: 28,
          marginRight: 28,
          marginTop: 18,
          borderRadius: 20,
          fontSize: 16,
          borderColor: '#0068c6',
          borderWidth: 1,
        }}>
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            marginBottom: 10,
            marginTop: 10,
          }}>
          Sign in
        </Text>
      </TouchableOpacity>
      <Text style={style.section}>or</Text>
      <TouchableOpacity
        style={{
          marginLeft: 28,
          marginRight: 28,
          marginTop: 18,
          borderRadius: 20,
          borderColor: '#A2A1A1',
          borderWidth: 1,
          fontSize: 16,
        }}>
        <Text
          style={{
            color: '#0068c6',
            alignSelf: 'center',
            marginBottom: 10,
            marginTop: 10,
          }}>
          Sign in with Google
        </Text>
      </TouchableOpacity>
      <View style={{display: 'flex'}}>
        <Text style={style.section}>
          Don't Have an Account, Yet?
          <Text
            style={style.section}
            onPress={() => navigation.navigate('Signup')}>
            Sign Up
          </Text>
        </Text>
      </View>
      <Text style={style.section}>
        Can't Remember Password?
        <Text style={style.section} onPress={() => navigation.navigate('Home')}>
          forget password
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
    marginTop:18
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
    borderColor: '#A2A1A1',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft:20
  },
});

export default Signin;

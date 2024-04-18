import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {sendPasswordResetEmail} from 'firebase/auth';
import {auth} from '../config/Firebaseconfig';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Forgetpassword = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [newPassword, setnewPassword] = useState('');

  const checkpassword = {
    Email : Email,
    Password : newPassword
  };

  const handleSubmit = async () => {
    try {
      const status = await axios.post(
        'http://10.0.2.2:5000/api/user/Resetpass',
        checkpassword,
      );
      if (status) {
        console.log(status);
        Alert.alert("Status Done");
        navigation.navigate("Login");
      } else {
        console.log('Please enter your email');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.Container}>
      <View style={style.headerposition}>
        <Icon
          name="chevron-left"
          size={30}
          color={'#000000'}
          style={{marginLeft: 20}}
          onPress={() => navigation.goBack()}
        />
        <Text style={style.header}>Reset Password</Text>
      </View>
      <Image
        source={require('../assets/padlock.png')}
        style={{width: 128, alignSelf: 'center'}}
      />
      <Text style={style.Title}>What Mail you forgot Password</Text>
      <TextInput
        keyboardType="email-address"
        value={Email}
        onChangeText={Email => {
          setEmail(Email);
        }}
        style={style.Textinput}
      />
      <TextInput
        keyboardType="email-address"
        value={newPassword}
        onChangeText={newpassword => {
          setnewPassword(newpassword);
        }}
        style={style.Textinput}
      />
      <TouchableOpacity
        style={style.Submit}
        onPress={() => {
          handleSubmit();
        }}>
        <Text style={style.submittext}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    color: '#333333',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 28,
    marginBottom: 20,
  },
  Container: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Title: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    marginTop: 20,
  },
  Textinput: {
    borderColor: '#A1A2A2',
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 20,
    marginLeft: 28,
    marginRight: 28,
    backgroundColor: 'rgb(255,255,255)',
    elevation: 4,
    marginTop: 20,
  },
  Button: {
    backgroundColor: '#0068c6',
    borderRadius: 20,
    marginLeft: 28,
    marginRight: 28,
    marginTop: 20,
    borderColor: '#0068c6',
    borderWidth: 1,
  },
  Textinbutton: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 12,
    fontSize: 16,
  },
  Label: {
    marginLeft: 28,
    marginTop: 15,
  },
  Submit: {
    backgroundColor: '#0068c6',
    borderRadius: 20,
    marginRight: 28,
    marginLeft: 28,
    marginTop: 30
  },
  submittext: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerposition: {
    position: 'relative',
    top: -150,
  },
});

export default Forgetpassword;

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
import { sendPasswordResetEmail } from 'firebase/auth';
import {auth} from '../config/Firebaseconfig';
import { useNavigation } from '@react-navigation/native';

const Forgetpassword = ({navigation}) => {
  const [Email, setEmail] = useState('');

  const  handleSubmit = async ()=>{
    console.log(Email);
    try{
      if (!Email) {
        return Alert.alert('Error', "Please enter your email address", [{
          text: 'Okay',
          onPress: () => console.log('Sign Up Pressed')
        }], {
          cancelable: true
        });
    } else {
      await sendPasswordResetEmail(auth,Email)
      Alert.alert("Send Reset password Email Successful")
      navigation.navigate("Signin");
    }
  }catch(error){
    Alert.alert("Invalid Email Id","Please Enter Valid Email Id");
    console.error(error.message);
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
      <TouchableOpacity style={style.Submit} onPress={()=>{handleSubmit()}} >
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
    marginBottom: 20,
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
  },
  submittext: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerposition:{
    position:"relative",
    top:-180
  }
});

export default Forgetpassword;

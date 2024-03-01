import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useState, useEffect} from 'react';

const Forgetpassword = ({navigation}) => {
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');

  return (
    <View style={style.Container}>
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
      />
      <TouchableOpacity>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
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
});

export default Forgetpassword;

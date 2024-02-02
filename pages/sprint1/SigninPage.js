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
        source={require('../../assets/logo_emer-transformed.png')}
        style={style.logo}
      />
      <Text
        style={{
          fontSize: 24,
          color: 'blue',
          alignSelf: 'center',
        }}>
        Sign In
      </Text>
      <TextInput keyboardType="email-address" placeholder="Email" />
      <TextInput keyboardType="default" placeholder="Password" />
      <Button title="Sign in" color="#DD3356" />
      <Text style={style.section}>or</Text>
      <Button title="Sign in with Google" color="#DD4B39" />
      <View style={{display: 'flex'}}>
        <Text style={style.section}>
          Don't Have an Account, Yet?
          <Text
            style={style.section}
            onPress={() => navigation.navigate('Home')}>
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
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
    marginTop: 50,
    alignSelf: 'center',
  },
  section: {
    fontWeight: '300',
    alignSelf: 'center',
  },
});

export default Signin;

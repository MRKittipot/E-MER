import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

signOut = async () => {
  try {
    await GoogleSignin.signOut();
    console.log('User has been signed out');
  } catch (error) {
    console.log(error);
  }
};

const GGLogoutbutton = () => {
  return (
    <TouchableOpacity style={style.container} onPress={()=>signOut()}>
      <Text>Log out</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

export default GGLogoutbutton;

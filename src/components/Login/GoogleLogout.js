import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useState,useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
//import {useNavigation} from '@react-navigation/native';

signOut = async (navigation) => {
  try {
    await GoogleSignin.signOut();
    console.log('User has been signed out');
    navigation.navigate('Signin');
  } catch (error) {
    console.log(error);
  }
};

const GGLogoutbutton = () => {
  return (
    <TouchableOpacity style={style.container} onPress={() => signOut()}>
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

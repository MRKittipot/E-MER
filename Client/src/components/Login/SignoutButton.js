import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
//import {useNavigation} from '@react-navigation/native';

import {auth} from '../../../config/Firebaseconfig';
import {useNavigation} from '@react-navigation/native';

const SignoutButton = () => {
  const navigation = useNavigation();
  const handleSignOut = async () => {
    // Renamed the function to handleSignOut
    try {
      await auth.signOut(); // Call auth.signOut() instead of signOut(auth)
      console.log('User has been signed out');
      navigation.navigate('Signin');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity style={style.container} onPress={handleSignOut}>
      <Text>Sign out</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
export default SignoutButton;

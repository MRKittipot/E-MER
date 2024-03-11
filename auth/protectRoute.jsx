// protectRoute.tsx
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useUserAuth} from '../context/userContext';
import SigninPage from '../screen/SigninPage';
import Account from '../screen/Account';
import LoadingPage from '../screen/LoadingPage';

const Stack = createStackNavigator();

const ProtectRoute = () => {
  const {user} = useUserAuth();
  const navigation = useNavigation();

  if (!user) {
    navigation.navigate('Signin');
    return null;
  }

  return <Stack.Screen name="Account" component={Account} />;
};

export default ProtectRoute;

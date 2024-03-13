<<<<<<< HEAD
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SignIn from './screens/SignIn'
import OTPcode from './screens/OTPcode'
import Verifieds from './screens/Verifieds'
import HomePage from './screens/HomePage'
import SignUp from './screens/SignUp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  //  <SignIn />
  //  <OTPcode />
  // <Verifieds />
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Page1"
        component={SignIn}
      />
      {/* <Stack.Screen
        name="Page2"
        component={OTPcode}
      /> */}
      <Stack.Screen
        name="Page3"
        component={Verifieds}
      />
      <Stack.Screen
        name="Page4"
        component={HomePage}
      />
      <Stack.Screen
        name="Page5"
        component={SignUp}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App
=======
import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserAuthContextProvider} from './context/userContext';

import Splash from './screen/Splash';
import Onboardings from './screen/Onboardings';
import Home from './screen/Home';
import SigninPage from './screen/SigninPage';

import Signup from './screen/SignUpFrom';
import Loading from './screen/LoadingPage';
import Forgetpassword from './screen/ForgetPassword';
import Profile from './screen/Profile';
import Account from './screen/Account';
import ProtectRoute from './auth/protectRoute.jsx';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserAuthContextProvider>
      <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" />
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Onboardings" component={Onboardings} />
          <Stack.Screen name="Signin" component={SigninPage} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="LoadingPage" component={Loading} />
          <Stack.Screen name="ForgetPage" component={Forgetpassword} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserAuthContextProvider>
  );
};

export default App;
>>>>>>> 26b2151d484519a4d3b8b5ead992bbf6c2c77570

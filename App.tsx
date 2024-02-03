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

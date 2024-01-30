import React, { useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Splash from './screen/Splash'
import Onboardings from './screen/Onboardings';
import Home from './screen/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          name="Onboardings"
          component={Onboardings}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
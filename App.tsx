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
import Profile from './screen/sprint2/Profile';
import Account from './screen/Account';
import Chat from './screen/sprint2/Chat';
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
        </Stack.Navigator>
      </NavigationContainer>
    </UserAuthContextProvider>

    
  );
};

export default App;

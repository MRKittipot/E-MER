import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserAuthContextProvider} from './context/userContext';

import Splash from './screen/Splash';
import Onboardings from './screen/Onboardings';
import Home from './screen/Home';
import SigninPage from './screen/SigninPage';

import Signup from './screen/SignUpForm';
import Loading from './screen/LoadingPage';
import Forgetpassword from './screen/ForgetPassword';
import Profile from './screen/sprint2/Profile';
//import ProtectRoute from './auth/protectRoute.jsx';
import MPhoneNumber from './screen/sprint2/MPhoneNumber';

import PhoneNumber from './screen/sprint2/PhoneNumber';
import Summaryorder from './screen/Summaryorder';
import Status from './screen/Status';

import ActivitiesPage from './screen/sprint2/ActivitiesPage';
import ReviewPage from './screen/sprint2/ReviewPage';
import SummaryorderHistory from './screen/SummaryorderHistory';
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
          <Stack.Screen name="MPhoneNumber" component={MPhoneNumber} />
          <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
          <Stack.Screen name="Summaryorder" component={Summaryorder} />
          <Stack.Screen name="Activitypage" component={ActivitiesPage} />
          <Stack.Screen name="Status" component={Status} />
          <Stack.Screen name="ReviewPage" component={ReviewPage} />
          <Stack.Screen name="Summaryorderhistory" component={SummaryorderHistory} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserAuthContextProvider>

    
  );
};

export default App;
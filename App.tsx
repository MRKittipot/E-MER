import React, {useEffect,useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage  from "./pages/sprint1/HomePages";
import SplashPage1 from "./pages/sprint1/Splash1";
import SplashPage2 from "./pages/sprint1/Splash2";
import SplashPage3 from "./pages/sprint1/Splash3";
import Loadingscreen from "./pages/sprint1/LoadingPage";


const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
     <Stack.Navigator   
     screenOptions={{
    headerShown: false
    }}>
      <Stack.Screen name="Home" component={Homepage}/>
      <Stack.Screen name="Splashpage1" component={SplashPage1}/>
      <Stack.Screen name="Sp2" component={SplashPage2}/>
      <Stack.Screen name="Splash3" component={SplashPage3}/>
      <Stack.Screen name="Loading" component={Loadingscreen}/>
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 
import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import GGSigninButton from './src/components/Login/GGSigninButton';
import _signinWithGoogle from './config/firebase/GoogleSignin';
import {NavigationContainer} from '@react-navigation/native';
import SignoutButton from './src/components/Login/SignoutButton';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

function App(): React.JSX.Element {
  async function googleSignin() {
    _signinWithGoogle().then(data => {
      if (!data) {
        console.log('Error : No Data');
        return;
      }
      console.log('=>Success', data);
    });
  }

  async function signOut() {
    try {
      await GoogleSignin.signOut();
      console.log('Sign out Successfully');
    } catch (error) {
      console.log('Failed to sign out', error);
    }
  }

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <GGSigninButton
            image={require('./assets/google-logo.png')}
            bg={'#e54545'}
            onPress={() => googleSignin()}
          />
          <SignoutButton onPress={() => signOut()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
*/

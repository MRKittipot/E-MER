import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import Signin from './SigninPage';


const Loadingscreen = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsloading(false), 2000);
  }, []);

  if (isLoading) {
    return(
    <View style={style.container}>
      <ActivityIndicator size="large" color="blue"/>
    </View>)
  }
  return (
    <View>
       <Signin/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
}
})

export default Loadingscreen;

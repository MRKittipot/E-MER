import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useEffect, useState} from 'react';

const Loadingscreen = ({navigation}) => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsloading(false), 2000);
  }, []);

  if (isLoading) {
    return (
      <View style={style.container}>
        <ActivityIndicator size="large" color="#0068c6" />
      </View>
    );
  }
  return (
    <View
      style={{
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Image
        source={require('../assets/logo_emer-transformed.png')}
        style={{
          width: 129,
          height: 210,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 24,
          fontWeight: 'bold',
          alignSelf: 'center',
        }}>
        Complete Register
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#0068c6',
          marginLeft: 28,
          marginRight: 28,
          marginTop: 18,
          borderRadius: 20,
          borderColor: '#0068c6',
          borderWidth: 1,
        }}
        onPress={() => navigation.navigate('Signin')}>
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            marginBottom: 12,
            marginTop: 12,
            fontSize:16
          }}>
          Go Back to Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Loadingscreen;

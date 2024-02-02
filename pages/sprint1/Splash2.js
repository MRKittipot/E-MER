import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default SplashPage2 = ({navigation}) => {
  return (
    <View style={style.container}>
      <Icon
        name="left"
        size={30}
        color="#000000"
        onPress={() => navigation.goBack()}></Icon>
      <Text style={style.textheader}>Find a EV Charger</Text>
      <Text style={style.text}>
        Easily to Find a EV Charger near you When battery is almost done
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Splash3')} style={style.button}>
        <Icon name="arrowright" size={30} color="#ffffff"></Icon>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textheader: {
    fontSize: 20,
    color: '#0068c9',
    fontWeight: 'bold',
    marginTop: 106,
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 43,
  },
  text: {
    fontSize: 20,
    fontWeight: 'medium',
    color: '#0068C9',
    marginRight: 47,
    marginLeft: 47,
  },
  button: {
    backgroundColor: '#0068c9',
    borderRadius: 100,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 33,
    padding: 33,
  },
});

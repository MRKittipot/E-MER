import React from 'react';
import {View, Text, Image, StyleSheet,Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export default SplashPage1 = ({navigation}) => {
  return (
    <View style={style.container}>
      <Icon name="left" size={30} color="#000000" onPress={()=>navigation.goBack()}></Icon>
      <Text style={style.textheader}>E-MER The New solution for an Environment</Text>
      <Text style={style.text}>Charge EV from your location when your EV rus out of charge by booking our Mobile Charging Service</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Sp2")} style={style.button}>
        <Icon name="arrowright" size={30}  color="#ffffff"></Icon>
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
    fontWeight:"bold",
    marginTop: 106,
    marginLeft:70,
    marginRight:70,
    marginBottom:43
  },
  text:{
    fontSize: 20,
    fontWeight:"medium",
    color:"#0068C9",
    marginRight:47,
    marginLeft:47,
    justifyContent:"center"
  },
  button:{
    backgroundColor:"#0087C9",
    borderRadius:100,
    paddingBottom:5,
    paddingTop:5,
    paddingLeft:33,
    paddingRight:33,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:200,
    marginRight:50
  },
  buttontext:{
    fontSize:14,
    color:"#ffffff"
  }
});


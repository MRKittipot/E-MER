import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default SplashPage3 = ({navigation}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Icon
        name="left"
        size={30}
        color="#000000"
        onPress={() => navigation.goBack()}></Icon>
      </TouchableOpacity>
      <Text style={style.textheader}>Mobile Charger Service</Text>
      <Text style={style.text}>EV Completely Done</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Loading")} style={style.button}>
        <Text style={style.buttontext}>
          Get's Start
        </Text>
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
    fontWeight: "bold",
    color: '#0068C9',
    marginTop: 106,
    marginLeft:70,
    marginRight:70
  },
  text:{
    fontSize: 20,
    fontWeight:"medium",
    color:"#0068C9",
    marginRight:47,
    marginLeft:47
  },
  button:{
    backgroundColor:"#0068c9", 
    width:"70%",
  },
  buttontext:{
    color:'white',
    fontSize:15,
    fontWeight:"bold",
    alignSelf:"center"
  }
});



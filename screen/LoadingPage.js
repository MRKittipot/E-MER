import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View, Button} from 'react-native';
import {useEffect, useState} from 'react';


const Loadingscreen = ({navigation}) => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsloading(false), 2000);
  }, []);

  if (isLoading) {
    return(
    <View style={style.container}>
      <ActivityIndicator size="large" color="#0068c6"/>
    </View>)
  }
  return (
    <View style={{
      alignContent:"center",
      justifyContent:"center",
      flex:1
    }}>
       <Text>Complete Register</Text>
       <Button title="Go back to Sign in" color="#0068c6" onPress={()=>navigation.navigate("Signin")}/>
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

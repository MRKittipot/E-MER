import * as React from "react";
import { View,Text,StyleSheet,Button } from "react-native";

export default function Homepage({navigation}){

    const style = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
            },
            text:{
                fontSize:20
            }
        })  
        return(
        <View style={style.container}>
            <Text style={style.text}>Home page</Text>
            <Button title="Go to Splash art"
            onPress = {()=>
            navigation.navigate("Splashpage1")}/>
        </View>
    )
}

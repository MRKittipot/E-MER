import React from "react";
import {View,TextInput,Date,Text, TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const Signup = ({navigation}) => {
    return(
        <View>
            <Icon name="left" size={30} color="#000000" onPress={()=>navigation.goBack()} style={{marginLeft:20,marginTop:35}}></Icon>
            <Text 
            style={
                {
                    fontSize:25,
                    color:"black",
                    fontWeight:"bold",
                    marginLeft:25,
                    marginTop:25
                }
            }>
                Create an Account
            </Text>
            <Text
            style={{marginLeft:25,fontSize:14}}>
                Enter the fields below to get started
            </Text>
            <Text style={style.Inputtitile}>
                Name
            </Text>
            <TextInput keyboardType="default" style={style.textinput}/>
            <Text style={style.Inputtitile}>
                Email
            </Text>
            <TextInput keyboardType="default" style={style.textinput}/>
            <Text style={style.Inputtitile}>
                Password
            </Text>
            <TextInput keyboardType="default"style={style.textinput}/>
            <Text style={style.Inputtitile}>
                Confirm Password
            </Text>
            <TextInput keyboardType="default"style={style.textinput}/>
            <Text style={style.Inputtitile}>
                Sex
            </Text>
            <TextInput keyboardType="default"style={style.textinput}/>
            <Text style={style.Inputtitile}>
                Date of Birth
            </Text>
            <TextInput keyboardType="default"style={style.textinput}/>
            <TouchableOpacity style={{
                backgroundColor:'#0068c6',
                marginLeft:25,
                marginRight:25,
                marginTop:30,
                borderRadius:20
            }}  onPress={()=>navigation.navigate("LoadingPage")}>
                <Text 
                style={{
                    color:"white",
                    alignSelf:"center",
                    marginTop:10,
                    marginBottom:10
                }}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    Inputtitile:{
        marginLeft:25,
        marginTop:20,
        fontSize:14
    },
    textinput:{
        borderColor:"#A2A1A1",
        borderWidth:1,
        borderRadius:20,
        marginLeft:25,
        marginRight:25,
        height:47,
        paddingLeft:20
    }
})

export default Signup;
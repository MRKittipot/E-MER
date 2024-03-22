import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'


const SignIn = () => {
    const [text, onChangeText] = React.useState('');
    // const [number, onChangeNumber] = React.useState('');
  return (
    <View>
        <View style = {{ paddingTop: 30, alignItems: 'center'}}>
            <Image source = {require('../images/logo_emer-transformed.png')} style ={{ width: 120, height: 180}} />
        </View>
        <View style = {{marginTop: 15,
                        justifyContent : 'center',
                        alignItems : 'center'}}>
            <Text style = {{color : '#333333', fontSize : 20, fontWeight : 'bold'}}>Welcome to
                <Text style={{ color: '#0068C9', fontSize: 24, fontWeight: '900' }}> EV Emergency</Text>
            </Text> 
            <Text style = {{color : '#333333', fontSize : 14, fontWeight : 'bold', marginTop : 10}}>Welcome back, log in and get started</Text>                 
        </View>
        <View style = {{marginLeft: 25}}>
            <Text style = {{color: '#A0A0A0', fontSize: 16, fontWeight: '700', marginTop: 25, alignItems : 'right' }}>Email address</Text> 
            <TextInput  style= {{height: 50,
                                marginRight: 25,
                                borderWidth: 1,
                                borderColor: '#A2A1A1',
                                padding: 10,
                                borderRadius: 23,
                                marginTop: 5,
                                backgroundColor: 'rgba(255, 255, 255, 0.80)',
                                elevation: 4}}
                        onChangeText= {onChangeText}
                        value= {text}
                        keyboardType="email-address"
            />
            <Text style = {{color: '#A0A0A0', fontSize: 16, fontWeight: '700', marginTop: 10, alignItems : 'right' }}>Password</Text> 
            <TextInput  style= {{height: 50,
                                marginRight: 25,
                                borderWidth: 1,
                                borderColor: '#A2A1A1',
                                padding: 10,
                                borderRadius: 23,
                                marginTop: 5,
                                backgroundColor: 'rgba(255, 255, 255, 0.80)',
                                elevation: 4}}
                        onChangeText= {onChangeText}
                        value= {text}
            />
        </View>
        <View style={{ alignItems: 'flex-end', marginTop: 25, marginRight: 25 }}>
            <Text style={{ color: '#0068C9', fontSize: 14, fontWeight: '700' }}>Forgot your password?</Text>
        </View>
        <View style = {{marginLeft: 25, marginRight: 25 }}>
            <TouchableOpacity onPress={() => {}}
                style={{backgroundColor: '#B4DDFC',
                        padding: 15,
                        borderRadius: 23,
                        marginBottom: 15,
                        marginTop: 25 }} >
                <Text style = {{textAlign: 'center', color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Sign In</Text>
            </TouchableOpacity>  
        </View>
        <View style = {{justifyContent : 'center',
                        alignItems : 'center'}}>
            <Text style={{ color: '#333333', fontSize: 18, fontWeight: '900' }}> OR</Text>
        </View> 
        <View style= {{flexDirection: 'row', justifyContent: 'space-between', marginRight: 25, marginLeft: 25}} >
                <TouchableOpacity onPress= {() => {}} style= {{borderColor: '#A2A1A1',
                                                            borderWidth: 1,
                                                            borderRadius: 23,
                                                            paddingHorizontal: 60,
                                                            paddingVertical: 10,
                                                            marginTop: 5}} >
                    <Image source = {require('../images/Google.png')} style ={{ width: 33, height: 33}} />
                </TouchableOpacity>
                <TouchableOpacity onPress= {() => {}} style= {{borderColor: '#A2A1A1',
                                                            borderWidth: 1,
                                                            borderRadius: 23,
                                                            paddingHorizontal: 60,
                                                            paddingVertical: 5,
                                                            marginTop: 5}} >
                    <Image source = {require('../images/Facebook.png')} style ={{ width: 40, height: 40}} />
                </TouchableOpacity>
            </View>   
            <View style = {{justifyContent : 'center',
                            alignItems : 'center',
                            marginTop: 25}}>
                <Text style = {{color : '#A0A0A0', fontSize : 14, fontWeight : 'bold'}}>Already have an Account?
                    <Text style={{ color: '#0068C9', fontSize: 14, fontWeight: '900' }}> Sign up</Text>
                </Text> 
            </View>
        
    </View>
  )
}

// const style = StyleSheet.create({
//     vLogo: {
//         paddingTop: 30, 
//         alignItems: 'center'
//     },
//     logo: {
//         width: 120, 
//         height: 180
//     },
//     headWelcome: {
//         marginTop: 15,
//         justifyContent : 'center',
//         alignItems : 'center'
//     },
//     textWelcome1: {
//         color : '#333333', 
//         fontSize : 20, 
//         fontWeight : 'bold'
//     },
//     textWelcome2: {
//         color: '#0068C9', 
//         fontSize: 24, 
//         fontWeight: '900'
//     },
//     textWelcome3: {
//         color : '#333333', 
//         fontSize : 14, 
//         fontWeight : 'bold', 
//         marginTop : 10
//     },
//     textEmailAdd: {
//         color: '#A0A0A0', 
//         fontSize: 16, 
//         fontWeight: '700', 
//         marginTop: 25, 
//         alignItems: 'right' 
//     },
//     textInput: {
//         height: 50,
//         marginRight: 25,
//         borderWidth: 1,
//         borderColor: '#A2A1A1',
//         padding: 10,
//         borderRadius: 23,
//         marginTop: 5,
//         backgroundColor: 'rgba(255, 255, 255, 0.80)',
//         elevation: 4
//     },
//     textPassword: {
//         color: '#A0A0A0', 
//         fontSize: 16, 
//         fontWeight: '700', 
//         marginTop: 10, 
//         alignItems : 'right' 
//     },
//     forgotPass: {
//         alignItems: 'flex-end', 
//         marginTop: 25, 
//         marginRight: 25
//     },
//     textForgotPass: {
//         color: '#0068C9', 
//         fontSize: 14, 
//         fontWeight: '700'
//     },
//     contentSignIn: {
//         marginLeft: 25, 
//         marginRight: 25
//     },
//     buttonSignIn: {
//         backgroundColor: '#B4DDFC',
//         padding: 15,
//         borderRadius: 23,
//         marginBottom: 15,
//         marginTop: 25
//     },
//     textSignIn: {
//         textAlign: 'center', 
//         color: '#FFFFFF', 
//         fontSize: 18, 
//         fontWeight: 'bold' 
//     },
//     contentOR: {
//         justifyContent : 'center',
//         alignItems : 'center'
//     },
//     textOR: {
//         color: '#333333', 
//         fontSize: 18, 
//         fontWeight: '900'
//     },
//     contentGF: {
//         flexDirection: 'row', 
//         justifyContent: 'space-between', 
//         marginRight: 25, 
//         marginLeft: 25
//     },
//     buttonGF: {
//         borderColor: '#A2A1A1',
//         borderWidth: 1,
//         borderRadius: 23,
//         paddingHorizontal: 60,
//         paddingVertical: 10,
//         marginTop: 5
//     },
//     imageG: {
//         width: 33, 
//         height: 33
//     },
//     imageF: {
//         width: 40, 
//         height: 40
//     },
//     contentAsk: {
//         justifyContent : 'center',
//         alignItems : 'center',
//         marginTop: 25
//     },
//     textAsk1: {
//         color : '#A0A0A0', 
//         fontSize : 14, 
//         fontWeight : 'bold'
//     },
//     textAsk2: {
//         color: '#0068C9', 
//         fontSize: 14, 
//         fontWeight: '900'
//     }
// })

export default SignIn

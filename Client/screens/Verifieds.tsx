import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
// import LottieView from '../node_modules/lottie-react-native/lib/typescript/types'
import LottieView from 'lottie-react-native';

const Verifieds = ({navigation}) => {
  return (
    <View style={{justifyContent: 'center',
                  alignItems: 'center'}}>
        <View>
          <LottieView
            style = {{
              width : 300,
              height : 250,
              marginTop: 100,
            }}
            source = {require("../animation/Animation2.json")}
            autoPlay
            loop={false}
          />
        </View>
        <View style = {{paddingTop: 35 }}>
            <Text style={{ color: '#333333', fontSize: 24, fontWeight: '900', textAlign: 'center' }}>Verified!</Text>
            <Text style = {{color : '#333333', fontSize : 14, fontWeight : '700', marginTop : 10}}>You have suscessfully connect account</Text>                 
        </View>
        <View style = {{marginLeft: 25, marginRight: 25, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate("Page4")}
                style={{backgroundColor: '#0068C9',
                        padding: 15,
                        borderRadius: 23,
                        marginBottom: 25,
                        marginTop: 80,
                        width: 130}} >
               
                <Text style = {{textAlign: 'center', color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>OK</Text>
            </TouchableOpacity>  
        </View>
    </View>
  )
}

// const style = StyleSheet.create({
//     contentHead: {
//       marginTop: 25,
//       marginLeft: 25,
//       paddingTop: 50
//     },
//     textHead1: {
//       color: '#333333', 
//       fontSize: 24, 
//       fontWeight: '900'
//     },
//     textHead2: {
//       color : '#333333', 
//       fontSize : 14, 
//       fontWeight : '700', 
//       marginTop : 10
//     },
//     contentButton: {
//       marginLeft: 25, 
//       marginRight: 25, 
//       justifyContent: 'center', 
//       alignItems: 'center'
//     },
//     Button: {
//       backgroundColor: '#B4DDFC',
//       padding: 15,
//       borderRadius: 23,
//       marginBottom: 25,
//       marginTop: 150,
//       width: 130
//     },
//     textButton: {
//       textAlign: 'center', 
//       color: '#FFFFFF', 
//       fontSize: 18, 
//       fontWeight: 'bold'
//     }
// })

export default Verifieds 
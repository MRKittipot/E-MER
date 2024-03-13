import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const OTPcode = () => {
  return (
    <View>
        <View style = {{marginTop: 25,
                        marginLeft: 25,
                        paddingTop: 50 }}>
            <Text style={{ color: '#333333', fontSize: 24, fontWeight: '900' }}> OTP Code Verification</Text>
            <Text style = {{color : '#A0A0A0', fontSize : 14, fontWeight : 'bold', marginTop : 10}}>Enter the fields below to get started</Text>                 
        </View>
        <View style = {{marginLeft: 25, marginRight: 25 }}>
            <TouchableOpacity onPress={() => {}}
                style={{backgroundColor: '#0068C9',
                        padding: 15,
                        borderRadius: 23,
                        marginBottom: 25,
                        marginTop: 150 }} >
                <Text style = {{textAlign: 'center', color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Verify</Text>
            </TouchableOpacity>  
        </View>
    </View>
  )
}

// const style = StyleSheet.create({
//   contentHead: {
//     marginTop: 25,
//     marginLeft: 25,
//     paddingTop: 50
//   },
//   textHead1: {
//     color: '#333333', 
//     fontSize: 24, 
//     fontWeight: '900'
//   },
//   textHead2: {
//     color : '#A0A0A0', 
//     fontSize : 14, 
//     fontWeight : 'bold', 
//     marginTop : 10
//   },
//   contentButton: {
//     marginLeft: 25, 
//     marginRight: 25
//   },
//   Button: {
//     backgroundColor: '#0068C9',
//     padding: 15,
//     borderRadius: 23,
//     marginBottom: 25,
//     marginTop: 150
//   },
//   textButton: {
//     textAlign: 'center', 
//     color: '#FFFFFF', 
//     fontSize: 18, 
//     fontWeight: 'bold'
//   }
// })

export default OTPcode
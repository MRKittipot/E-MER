import React from "react";
import {View,TouchableOpacity,Text} from 'react-native'


export default function SignoutButton({onPress}){
    return(
        <TouchableOpacity onPress={()=>onPress()}>
            <View style={{
                flexDirection:"row",
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                backgroundColor: "#e757",
                borderRadius: 8
                }}>
                <Text style={{
                    color: '#e54545',
                    fontSize: 16,
                    marginLeft: 10
                }}>Sign-out</Text>
            </View>
        </TouchableOpacity>
    )
}
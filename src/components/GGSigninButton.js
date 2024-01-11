import { View,Text,TouchableOpacity,Image } from "react-native";
import React from 'react';

const GGSigninButton = ({image,bg,onPress}) => {
    return(
        <TouchableOpacity onPress={()=>onPress()}>
            <View style={{
                backgroundColor: bg,
                minWidth:300,
                minHeight:50,
                justifyContent:'center',
                alignItems:"center",
                flexDirection:"row",
                borderRadius:20,
                marginTop:8,
                columnGap:20,
            }}>
                <Image source={image} style={{width:40,height:40}}/>
                <Text 
                style={
                    {
                        fontSize:20,
                        fontWeight:"bold",
                        color:"white",
                    }
                }>Sign In With Google</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GGSigninButton;
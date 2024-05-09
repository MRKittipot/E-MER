import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';


const Qrpayment = ({ navigation }) => {
    const route = useRoute()

    const { userName,uid,typecharger,ordernumber,createdAt,price,energy }:any = route.params
  
    const handlePayOrder = () => {
      navigation.navigate('ReviewPage',{userName:userName,uid:uid,typecharger:typecharger,ordernumber:ordernumber,createdAt:createdAt})
    }
    const formattedPrice = parseFloat(price).toFixed(2);
    const formattedEnergy = parseFloat(energy).toFixed(2);
    return (
        <ScrollView>
            <Image style={styles.paymentImage}
            source={require('../images/payment.jpg')}/>
            <Text style={styles.boldFont}>Total price : {formattedPrice} Bath</Text>
        <TouchableOpacity
          style={[styles.sentButton]}
          onPress={handlePayOrder}>
          <Text style={styles.sentButtonText}>Confirm to pay</Text>
        </TouchableOpacity>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    // Header:{
    //     color:"#0068c6"
    // }
    boldFont: {
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center", // Add this line
        top:10,
        fontSize: 18,
    },sentButton: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      width: '70%',
      paddingVertical: 12,
      borderRadius: 20,
      marginTop: 50,
      backgroundColor: '#0068c6'
    },
    sentButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    paymentImage: {
        alignSelf: 'center',
        marginTop: 50, // Adjust this value as needed
        marginBottom: 20, // Adjust this value as needed
        width: 300, // Adjust the width as needed
        height: 500, // Adjust the height as needed
        resizeMode: 'contain',
        borderRadius: 20, // Adjust the borderRadius as needed
        top: 50, // Adjust the top
    }
    
  })
export default Qrpayment
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import Tabs_menu from '../src/components/Menu_naigation/Tabs_menu'


const Summaryorder = ({navigation}) => {
  const route = useRoute()

  const { userName,uid,typecharger,ordernumber,createdAt,price,energy }:any = route.params

  const handleSubmitOrder = () => {
    navigation.navigate('Qrpayment',{userName:userName,uid:uid,typecharger:typecharger,ordernumber:ordernumber,createdAt:createdAt,price:price})
  }
  const formattedPrice = parseFloat(price).toFixed(2);
  const formattedEnergy = parseFloat(energy).toFixed(2);
  return (
    <ScrollView>
      {/* 1 */}
      <View>
        <Text style={styles.HeadSummary}>Summary order</Text>
      </View>

      {/* 2 */}
      <View style={styles.SummaryCard}>
        {/* 2.1 */}
        <View style={styles.HeadOrder}>
          {/* <Image style={{ width: 50, height: 50 }} source={require('../images/electric.png')} /> */}
          <View style={{ alignItems: "center" }}>
            <Text style={styles.TextSummaryOrder}>{userName}</Text>
        
              <View>
                <Text style={{ fontSize: 20 }}>Order number : {ordernumber}</Text>
              </View>
 
          </View>
        </View>

        {/* 2.2 */}
        <View style={styles.CarDetail}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.boldFont}>Car brand</Text>
            {/* <Text>{carBand}</Text> */}
          </View>
          <View>
            
              <View>
                <Text style={styles.boldFont}>Type Charger {typecharger}</Text>
              </View>
     
          </View>
        </View>

        {/* 2.3 */}
      </View>

      {/* 3 */}
      <View style={styles.SummaryCard}>
        <View style={styles.AmountPayHeadDetail}>
          {/* <Image style={{ width: 20, height: 20, marginLeft: 5 }} source={require('../images/money.png')} /> */}
        </View>
        {/* 3.1 */}
        <View style={styles.AmountPayHead}>
          <View>
            <Text style={styles.boldFont}>Amount : {formattedPrice} Bath</Text>
            <Text style={styles.boldFont}>Energy : {formattedEnergy}</Text>
          </View>
          <View>
            {/* <Text style={styles.boldFont}>{amount} Bath / บาท</Text>
            <Text style={styles.boldFont}>{energy} kWh</Text>
            <Text style={styles.boldFont}>{vet} Bath / บาท</Text> */}
          </View>
        </View>

        {/* 3.2 */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.boldFont}>Total : {formattedPrice} Bath</Text>
            {/* <Text style={{ color: "#000000" }}>{total + 100} - {total + 150}</Text> */}
          </View>
          {/* <Text style={styles.boldFont}>{total} Bath / บาท</Text> */}
        </View>
      </View>
        <TouchableOpacity
          style={[styles.sentButton]}
          onPress={handleSubmitOrder}>
          <Text style={styles.sentButtonText}>Confirm</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Header:{
  //     color:"#0068c6"
  // }
  HeadSummary: {
    color: "#0068c6",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: "7%"
  },
  SummaryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 11,
    marginHorizontal: "7%",
    marginTop: "7%",
    padding: "7%",
  },
  HeadOrder: {
    alignItems: "center",
    borderWidth: 1,
    borderTopColor: "#FFFFFF",
    borderRightColor: '#FFFFFF',
    borderLeftColor: '#FFFFFF',
    borderBottomColor: '#A2A1A1',
    paddingBottom: "7%",
    marginBottom: "7%",
    flexDirection: "row"
  },
  TextSummaryOrder: {
    width:"100%",
    textAlign:"left",    
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000"
  },
  CarDetail: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  AmountPayHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    borderWidth: 1,
    borderTopColor: "#FFFFFF",
    borderRightColor: '#FFFFFF',
    borderLeftColor: '#FFFFFF',
    borderBottomColor: '#A2A1A1',
    paddingBottom: "7%",
    marginBottom: "7%"
  },
  AmountPayHeadDetail: {
    flexDirection: "row",
    alignItems: "center"
  },
  boldFont: {
    fontWeight: "bold",
    color: "#000000"
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
})

export default Summaryorder;
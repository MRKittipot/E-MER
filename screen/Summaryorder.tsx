import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';


const Summaryorder = () => {

  const [orderNumber, setOrderNumber] = useState("")
  // const [carBand, setCarBand] = useState("BYD Dolphin")
  // const [typeCharge, setTypeCharge] = useState("CHAdeMO")
  // const [location, setLocation] = useState("944 Rama IV Road, Wang Mai Subdistrict, Pathumwa District")
  // const [amount, setMount] = useState(350)
  // const [energy, setEnergy] = useState(28.571)
  // const [vet, setVet] = useState(15)
  // const [total, setTotal] = useState(130)

  const [orderData, setOrderData] = useState(null); // State to store order data

  useEffect(() => {
    // Function to fetch order data
    const fetchOrderData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:5000/api/reservation/getbill'); // Replace 'your-api-url' with your actual API endpoint
        setOrderData(response.data); // Set the fetched order data to the state
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderData(); // Call the function to fetch order data when component mounts
  }, []);

  return (
    <View>
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
            <Text style={styles.TextSummaryOrder}>Panachai Likhitpanyarat</Text>
            {orderData && orderData.map(order => (
              <View key={order._id}>
                <Text style={{ fontSize: 20 }}>Order number : {order.ordernumber}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 2.2 */}
        <View style={styles.CarDetail}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.boldFont}>Car brand</Text>
            {/* <Text>{carBand}</Text> */}
          </View>
          <View>
            {orderData && orderData.map(order => (
              <View key={order._id}>
                <Text style={styles.boldFont}>Type Charger {order.typecharger}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 2.3 */}
        <View style={{ marginTop: "7%" }}>
          <Text style={styles.boldFont}>Location</Text>
          {/* <Text>{location}</Text> */}
        </View>
      </View>

      {/* 3 */}
      <View style={styles.SummaryCard}>
        <View style={styles.AmountPayHeadDetail}>
          <Text style={styles.boldFont}>Amount to pay</Text>
          {/* <Image style={{ width: 20, height: 20, marginLeft: 5 }} source={require('../images/money.png')} /> */}
        </View>
        {/* 3.1 */}
        <View style={styles.AmountPayHead}>
          <View>
            <Text style={styles.boldFont}>Amount</Text>
            <Text style={styles.boldFont}>Energy</Text>
            <Text style={styles.boldFont}>Vat</Text>
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
            <Text style={styles.boldFont}>Total  </Text>
            {/* <Text style={{ color: "#000000" }}>{total + 100} - {total + 150}</Text> */}
          </View>
          {/* <Text style={styles.boldFont}>{total} Bath / บาท</Text> */}
        </View>
      </View>
    </View>
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
  }
})

export default Summaryorder;
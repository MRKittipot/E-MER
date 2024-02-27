import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PaymentHistory = () => {
  return (
    <View style={styles.elevation}>
      <View style={styles.Payment}>

        <View style={styles.DateCardPayment}>
          <Text style={styles.DatePayment}>{14}</Text>
          <Text style={styles.DatePayment}>{"Mar"}</Text>
        </View>

        <View style={styles.CardPayment}>
          <View style={styles.NamePay}>
            <Text style={styles.DetailPayment}>Name: </Text>
            <Text style={{ fontSize: 16, color: "white", fontWeight: 'bold', color: "black" }}>{"Panachai Likhitpanyarat"}</Text>
          </View>
          <Text style={styles.DetailPayment}>Date: {17 + " " + "กุมภาพันธ์" + " " + 2567}</Text>
          <View style={styles.ValuePay}>
            <Text style={styles.DetailPayment}>Battery: {30 + "%"}</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#0068C6" }}>Price {500} Bath</Text>
          </View>
        </View>

      </View>
    </View >
  )
}

export default PaymentHistory

const styles = StyleSheet.create({
  ValuePay: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  NamePay: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  DatePayment: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
  },
  DetailPayment: {
    fontSize: 16,
    color: "black"
  },
  DateCardPayment: {
    backgroundColor: '#0068C6',
    height: "100%",
    width: "20%",
    borderTopLeftRadius: 11,
    borderBottomLeftRadius: 11,
    justifyContent: 'center',
  },
  CardPayment: {
    height: "100%",
    width: "70%",
    justifyContent: 'space-evenly',
    marginLeft: "5%",
    marginRight: "5%",
  },
  Payment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: "7%",

    height: 100,
    borderWidth: 1,
    borderColor: "#A2A1A1",
    borderRadius: 11,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    elevation: 4,
  },
})
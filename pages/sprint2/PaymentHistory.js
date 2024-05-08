import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PaymentHistory = ({day, EN_munth, TH_munth, year, name, battery, price}) => {
  return (
    <View style={styles.Payment}>

      <View style={styles.DateCardPayment}>
        <Text style={styles.DatePayment}>{day}</Text>
        <Text style={styles.DatePayment}>{EN_munth}</Text>
      </View>

      <View style={styles.CardPayment}>
        <View style={styles.NamePay}>
          <Text style={styles.DetailPayment}>Name: </Text>
          <Text style={{ fontSize: 16, color: "white", fontWeight: 'bold', color: "black" }}>{name}</Text>
        </View>
        <Text style={styles.DetailPayment}>Date: {day + " " + TH_munth + " " + year}</Text>
        <View style={styles.ValuePay}>
          <Text style={styles.DetailPayment}>Battery: {battery + "%"}</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#0068C6" }}>Price {price} Bath</Text>
        </View>
      </View>

    </View>
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
    // marginTop: "7%",
    marginBottom: 10,

    height: 100,
    // borderWidth: 0.3,
    // borderColor: "#A2A1A1",
    borderRadius: 11,
    backgroundColor: 'rgba(255, 255, 255, 1)',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
})
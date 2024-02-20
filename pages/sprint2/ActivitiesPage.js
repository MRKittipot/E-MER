import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import History from '../../src/components/ActivityPage/History'
import PaymentHistory from '../../src/components/ActivityPage/PaymentHistory'

const ActivityPage = () => {
  return (
    <ScrollView style={styles.ActivityPage}>
      <Text style={styles.Head}>History</Text>
      <History />

      <Text style={styles.Head}>Payment History</Text>
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
      <PaymentHistory />
    </ScrollView>
  )
}

export default ActivityPage

const styles = StyleSheet.create({
  ActivityPage: {
    margin: "7%"
  },
  Head: {
    fontSize: 30,
    fontWeight: 'bold'
  },


})
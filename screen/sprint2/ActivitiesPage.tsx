import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import History from '../../src/components/Activities/History';
import PaymentHistory from '../../src/components/Activities/PaymentHistory';
// Defining the ActivitiesPage functional component
export default function ActivitiesPage() {
    return (
        <ScrollView style={styles.ActivityPage}>

        <Text style={styles.Head}>Payment History</Text>
        <PaymentHistory />
      </ScrollView>
    );
}

// Defining styles using StyleSheet.create
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: "bold",
        fontSize: 30,
        color: 'black'
    },
    ActivityPage: {
        margin: "7%",
      },
      Head: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20
      },
    
});

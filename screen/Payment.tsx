import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Wallet from '../src/components/Payment/Wallet'
import Card from '../src/components/Payment/Card'
import NetBanking from '../src/components/Payment/NetBanking'

const Payment = () => {
    return (
        <View>
            <View>
                <Text style={styles.HeadPayment}>Payment</Text>
            </View>

            <View style={styles.LayerPayment}>
                <Text style={styles.HeadDetail}>Wallet</Text>
                <Wallet />
            </View>
            
            <View style={styles.LayerPayment}>
                <Text style={styles.HeadDetail}>Save payment methods</Text>
                <View style={{ width: 300, height: 170, borderColor: "red", borderWidth: 1}}></View>
            </View>

            <View style={styles.LayerPayment}>
                <Text style={styles.HeadDetail}>Other Payment Methods</Text>
                <Card />
                <NetBanking />

            </View>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    HeadPayment: {
        color: "#0068c6",
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 50,
    },
    LayerPayment: {
        marginHorizontal: "7%",
    },
    HeadDetail: {
        color: '#000000',
        fontSize: 20,
        marginVertical: "7%"
    }
})
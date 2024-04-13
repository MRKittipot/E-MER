import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Wallet = () => {
    return (
        <View style={styles.PaymentCard}>
            <Icon name="wallet-outline" size={45} color="#000000" />
            <View style={{ marginLeft: "7%" ,width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <Text>Wallet balance</Text>
                    <Text>฿ {3000}</Text>
                </View>
                <View style={{ flexDirection: "row" ,alignItems: "center" }}>
                    <Text style={styles.addMoney}>add money to wallet</Text>
                    <View style={styles.radio}></View>
                </View>
            </View>
        </View>
    )
}

export default Wallet

const styles = StyleSheet.create({
    PaymentCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 11,
        padding: "7%",
        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    addMoney: {
        fontSize: 10, 
        borderColor: "#0262BC", 
        borderWidth: 2, 
        borderRadius: 11, 
        padding: 3,
        color: "#0262BC", 
        backgroundColor: "#E9EAEE",
        textAlign: "center",
    },
    radio: {
        borderWidth: 1,
        borderColor: "bleck",
        width: 20,
        height: 20,
        borderRadius: 11,
        marginLeft: 5
    }
})
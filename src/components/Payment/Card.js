import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = () => {
    return (
        <View style={styles.outherPaymentCard}>
            <Icon name="credit-card" size={45} color="#000000" />
            <View style={{ marginLeft: "7%", width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
                <Text>Credit / Debit card</Text>
                <View style={styles.radio}></View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    outherPaymentCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 11,
        paddingHorizontal: "7%",
        paddingVertical: "3%",
        marginBottom: "7%",
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
    radio: {
        borderWidth: 1,
        borderColor: "bleck",
        width: 20,
        height: 20,
        borderRadius: 11,
        marginLeft: 5
    }
})
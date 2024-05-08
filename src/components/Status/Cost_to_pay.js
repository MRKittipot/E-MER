import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

// mock up
const cost = 200

const Cost_to_pay = ({price}) => {
    return (
        <View style={styles.cost_card}>
            <Image style={{ marginLeft: 10 }} source={require("../../../images/coin.png")} />
            <View style={styles.cost_detail}>
                <Text style={{ fontSize: 16, marginLeft: -10, color: "#FFFFFF" }}>Cost</Text>
                <Text style={styles.cost_text}>{price} Bath</Text>
            </View>
        </View>
    )
}

export default Cost_to_pay

const styles = StyleSheet.create({
    cost_card: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        height: 80,
        backgroundColor: "#0068C6",
        borderRadius: 11,

        marginBottom: "7%"
    },
    cost_detail: {
        marginLeft: 20,
        alignItems: "center",
        marginRight: 10,
    },
    cost_text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginLeft: -10
    }
})
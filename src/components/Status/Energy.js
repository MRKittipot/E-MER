import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

// mock up
const energy = 28.571

const Energy = () => {
    return (
        <View style={styles.energy_card}>
            <Image source={require("../../../images/battery.png")} />
            <View style={styles.energy_detail}>
                <Text style={{ fontSize: 16, marginLeft: -25, color: "#FFFFFF" }}>Energy</Text>
                <Text style={styles.energy_text}>{energy} kWh</Text>
            </View>
        </View>
    )
}

export default Energy

const styles = StyleSheet.create({
    energy_card: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        height: 80,
        backgroundColor: "#0068C6",
        borderRadius: 11,

        marginBottom: "7%"
    },
    energy_detail: {
        marginLeft: 20,
        alignItems: "center",
        marginRight: 10
    },
    energy_text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginLeft: -25
    }
})
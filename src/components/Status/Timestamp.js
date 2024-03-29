import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

//mock up
const timestamp = "20 Mar 2023  10:00 - 10:30";

const Timestamp = () => {
    return (
        <View style={styles.timestamp_card}>
            <Image style={{ tintColor: "#FFFFFF" }} source={require("../../../images/calender.png")} />
            <View style={styles.timestamp_detail}>
                <Text style={styles.timestamp_text}>{timestamp}</Text>
                <Text style={{ fontSize: 16, color: "#FFFFFF"}}>Service duration time</Text>
            </View>
        </View>
    )
}

export default Timestamp

const styles = StyleSheet.create({
    timestamp_card: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        height: 120,
        backgroundColor: "#0068C6",
        borderRadius: 11,

        marginBottom: "7%"

    },
    timestamp_detail: {
        marginLeft: 20,
        alignItems: "center",
    },
    timestamp_text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF"
    }
})
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Timestamp from "../src/components/Status/Timestamp"
import Energy from "../src/components/Status/Energy"
import Cost_to_pay from "../src/components/Status/Cost_to_pay"



const Status = () => {
    const [usageTime, setUsageTime] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setUsageTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const seconds = usageTime % 60;
    const minutes = Math.floor((usageTime / 60) % 60);
    const hours = Math.floor(usageTime / 3600);

    const pad2 = (number) => {
        return number < 10 ? `0${number}` : number.toString();
    };

    return (
        <View>
            <Text style={styles.Head}>Status</Text>
            <View style={styles.status}>
                <Text style={styles.time}>{pad2(hours)} : {pad2(minutes)} : {pad2(seconds)} hr.</Text>
                <Timestamp />
                <View style={styles.energy_and_cost_card}>
                    <Energy />
                    <Cost_to_pay />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    Head: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginLeft: "7%",
        marginBottom: "7%"
    },
    status: {
        marginHorizontal: "7%"
    },
    time: {
        color: "#0068C6",
        fontWeight: "bold",
        fontSize: 45,
        alignSelf: "center",
        marginBottom: "7%"
    },
    energy_and_cost_card: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

});


export default Status
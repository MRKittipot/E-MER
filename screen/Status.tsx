import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Timestamp from "../src/components/Status/Timestamp"
import Energy from "../src/components/Status/Energy"
import Cost_to_pay from "../src/components/Status/Cost_to_pay"



const Status = () => {
    const [Second, setSecond] = useState(0);
    const [Minute, setMinute] = useState(0);
    const [Houre, setHoure] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setSecond((prevTime) => prevTime + 1);
        }, 1000);

        // 1 loop useEffect
        return () => { clearInterval(interval); };
    }, []);

    return (
        <View>
            <Text style={styles.Head}>Status</Text>
            <View style={styles.status}>
                {/* <Text style={styles.time}>00 : 15 : 24 hr.</Text> */}
                <Text style={styles.time}>{Second}</Text>
                {/* <Text style={styles.time}>{Minute}</Text> */}
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
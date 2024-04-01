import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const AddVehicleSelecCar = () => {
    return (
        <View>
            <View>
                <Text style={styles.AddVehicleHead}>Add vehicle</Text>
                <Text style={styles.AddVehicleLittle}>Enter the fields below to get started</Text>
            </View>
            <Image source={require("../images/battery.png")} />
        </View>
    )
}

export default AddVehicleSelecCar

const styles = StyleSheet.create({
    AddVehicleHead: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginLeft: "7%",
    },
    AddVehicleLittle: {
        marginLeft: "7%",
        marginBottom: "7%",
    },
})
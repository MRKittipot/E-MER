import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AddVehicleSearchBar from "../src/components/SearchBar/AddVehicleSearchBar"

const AddVehicle = () => {
    return (
        <View>
            <View>
                <Text style={styles.AddVehicleHead}>Add vehicle</Text>
                <Text style={styles.AddVehicleLittle}>Enter the fields below to get started</Text>
            </View>
            <AddVehicleSearchBar />

            {/* 1 */}
            <Text style={styles.AddVehicleToppic}>New Release</Text>
            <View style={styles.ShowImg}>
                <View>
                    <Image style={{ alignSelf: "center", marginBottom: "7%" }} source={require("../images/battery.png")} />
                    <View style={styles.AddVehicleDetail}>
                        <Image style={{ width: 20, height: 20 }} source={require("../images/battery.png")} />
                        <Text>LOTUS ELETRE</Text>
                    </View>
                </View>
                <View>
                    <Image style={{ alignSelf: "center", marginBottom: "7%" }} source={require("../images/battery.png")} />
                    <View style={styles.AddVehicleDetail}>
                        <Image style={{ width: 20, height: 20 }} source={require("../images/battery.png")} />
                        <Text>LOTUS ELETRE</Text>
                    </View>
                </View>
            </View>

            {/* 2 */}
            <Text style={styles.AddVehicleToppic}>Brand</Text>
            <View style={styles.ShowIcon}>
                <View>
                    <Image source={require("../images/battery.png")} />
                    <Text style={{ alignSelf: "center" }}>TESLA</Text>
                </View>
                <View>
                    <Image source={require("../images/battery.png")} />
                    <Text style={{ alignSelf: "center" }}>TESLA</Text>
                </View>
                <View>
                    <Image source={require("../images/battery.png")} />
                    <Text style={{ alignSelf: "center" }}>TESLA</Text>
                </View>
                <View>
                    <Image source={require("../images/battery.png")} />
                    <Text style={{ alignSelf: "center" }}>TESLA</Text>
                </View>
                <View>
                    <Image source={require("../images/battery.png")} />
                    <Text style={{ alignSelf: "center" }}>TESLA</Text>
                </View>
            </View>
        </View>
    )
}

export default AddVehicle

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
    AddVehicleToppic: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: "7%"
    },
    ShowImg: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginHorizontal: "7%",
        marginVertical: "7%",
    },
    AddVehicleDetail: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    ShowIcon: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "7%",
        marginVertical: "7%",
    }
})
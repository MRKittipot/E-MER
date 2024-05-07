import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import AddVehicleSearchBar from "../src/components/SearchBar/AddVehicleSearchBar";

const AddVehicle = () => {
    return (
        <ScrollView>
            <View>
                <View>
                    <Text style={styles.AddVehicleHead}>Add vehicle</Text>
                    <Text style={styles.AddVehicleLittle}>Enter the fields below to get started</Text>
                </View>
                <AddVehicleSearchBar />

                <Text style={styles.AddVehicleToppic}>Brand</Text>
                <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Image style={styles.circleImage} source={require("../assets/logo-tesla.png")} />
                        </View>
                        <Text style={styles.brandText}>TESLA</Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Image style={styles.circleImage2} source={require("../assets/logo-porsche.png")} />
                        </View>
                        <Text style={styles.brandText}>PORSCHE</Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Image style={styles.circleImage3} source={require("../assets/logo-bmw.png")} />
                        </View>
                        <Text style={styles.brandText}>BMW</Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Image style={styles.circleImage2} source={require("../assets/logo-audi.png")} />
                        </View>
                        <Text style={styles.brandText}>AUDI</Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Image style={styles.circleImage2} source={require("../assets/logo-BYD.png")} />
                        </View>
                        <Text style={styles.brandText}>BYD</Text>
                    </View>
                </ScrollView>

                <Text style={styles.AddVehicleToppic}>All Cars</Text>

                <ScrollView horizontal={true} contentContainerStyle={styles.rectangleContainer}>
                    {[...Array(5)].map((_, index) => (
                        <View key={index} style={styles.rectanglePair}>
                            <View style={styles.rectangle}></View>
                            <View style={styles.rectangle}></View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    )
}

export default AddVehicle;

const styles = StyleSheet.create({
    AddVehicleHead: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginLeft: "7%",
    },
    AddVehicleLittle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#A0A0A0',
        marginTop: 5,
        marginLeft: 27,
        marginBottom: 20
    },
    AddVehicleToppic: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: "7%"
    },
    ShowIcon: {
        flexDirection: "row",
        marginHorizontal: "7%",
        marginVertical: "7%",
    },
    scrollViewContent: {
        alignItems: 'flex-start',
        paddingLeft: "7%",
        marginTop: 20, 
    },
    circleContainer: {
        alignItems: 'center',
        marginRight: 20,
    },
    circle: {
        width: 90,
        height: 90,
        borderRadius: 80,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleImage: {
        width: 55, 
        height: 55, 
        resizeMode: 'contain'
    },
    circleImage2: {
        width: 70, 
        height: 70,
        marginTop: 5, 
        resizeMode: 'contain'
    },
    circleImage3: {
        width: 70, 
        height: 70, 
        resizeMode: 'contain',
        marginBottom: 5
    },
    brandText: {
        textAlign: 'center',
        marginTop: 10, 
        marginBottom: 30, 
        fontSize: 14,
        fontWeight: 'bold' // เพิ่ม fontWeight: 'bold' เพื่อทำให้ข้อความตัวหนา
    },
    rectangleContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 80
    },
    rectanglePair: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    rectangle: {
        width: 150,
        height: 150,
        backgroundColor: '#FFFFFF', 
        marginHorizontal: 5,
        marginLeft: 30,
        marginTop: 20,
        borderRadius: 20
    }
});

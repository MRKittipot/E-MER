import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'

const Add_vehicle_detail = ({ navigation }) => {
    const detail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id egestas enim, id hendrerit magna. Nullam dictum leo vitae leo finibus, sit amet iaculis lacus elementum. Integer ac urna commodo, congue odio a, fermentum odio. Duis in lectus dui. Cras turpis orci, malesuada ac sapien eu, sodales feugiat leo. Praesent malesuada congue dui vitae finibus. Aliquam elementum sodales est rhoncus molestie.";
    
    return (
        <View>

            <View style={{ margin: 20 }}>
                <Text style={styles.AddVehicle}>Add Vehicle</Text>
                <Text style={styles.AddVehicleText}>Enter the fields below to get started</Text>
            </View>
            <View>
                <Image
                    style={styles.NewReleaseDetail}
                    source={require('../img/Lotus_Eletre.png')} />

                <View style={styles.NameBand}>
                    <Image
                        style={styles.Logo}
                        source={require('../img/lotus.png')}
                    />
                    <Text style={styles.MarginBand}>LOTUS ELETRE</Text>
                </View>
            </View>
            <View style={{ margin: 20 }}>
                <Text style={styles.Year}>ปี : 2020</Text>
                <Text style={styles.Detail}>คำอธิบาย : {detail}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                <View style={styles.TypeChargeBox}>
                    <Image
                        style={styles.TypeCharge}
                        source={require('../img/ChargeType1.png')}
                    />
                    <Text style={{ alignSelf: "center", marginLeft: 10, fontWeight: 'bold' }}>CSS2</Text>
                </View>
                <View style={styles.TypeChargeBox}>
                    <Image
                        style={styles.TypeCharge}
                        source={require('../img/ChargeType2.png')}
                    />
                    <Text style={{ alignSelf: "center", marginLeft: 10, fontWeight: 'bold' }}>TYPE2</Text>
                </View>
                <View style={styles.TypeChargeBox}>
                    <Image
                        style={styles.TypeCharge}
                        source={require('../img/ChargeType3.png')}
                    />
                    <Text style={{ alignSelf: "center", marginLeft: 10, fontWeight: 'bold' }}>CHAdeMO</Text>
                </View>
            </View>
            <View style={{ alignItems: "center", marginTop: 30 }}>
                <Pressable style={styles.Continue} onPress={() => {
                    navigation.navigate('Add_vehicle')
                }}>
                    <Text style={{ fontWeight: 'bold', color: "#FFFFFF" }}>CONTINUE</Text>
                </Pressable>
            </View>


        </View>
    )
}

export default Add_vehicle_detail

const styles = StyleSheet.create({
    AddVehicle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000'
    },
    AddVehicleText: {
        color: '#000000'
    },
    NewReleaseDetail: {
        width: 250,
        height: 150,
        alignSelf: "center"
    },
    Logo: {
        width: 50,
        height: 50,
        marginHorizontal: 10
    },
    NameBand: {
        flexDirection: 'row',
        marginTop: 10,
        alignSelf: "center",
        alignItems: "center"
    },
    MarginBand: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 25,
        color: '#000000'
    },
    NewReleaseband: {
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    Band: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20
    },
    AllBand: {
        margin: 20
    },
    BandImg: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2
    },
    AllNameBand: {
        fontWeight: 'bold',
        marginTop: 10,
        color: '#000000'
    },
    Continue: {
        width: 200,
        height: 50,
        borderRadius: 200 / 2,
        backgroundColor: "#0068C6",
        justifyContent: "center",
        alignItems: "center"
    },
    Year: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    Detail: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    TypeCharge: {
        width: 25,
        height: 25

    },
    TypeChargeBox: {
        flexDirection: 'row',
        marginHorizontal: 3,
        padding: 8,
        borderWidth: 2,
        borderColor: "thistle",
        borderRadius: 50
    }
})
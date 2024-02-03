import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';


const Add_vehicle = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [search, setSearch] = useState('');
    const [choose, setChoose] = useState({});
    return (
        <View>

            <View style={{ margin: 20 }}>
                <Text style={styles.AddVehicle}>Add Vehicle</Text>
                <Text style={styles.AddVehicleText}>Enter the fields below to get started</Text>
            </View>

            <Searchbar
                placeholder="Try searching “Tesla"
                onChangeText={setSearchQuery}
                value={searchQuery}
                style={{ margin: 20 }}
            />

            <View>
                <Text style={{ margin: 20, fontWeight: 'bold', color: '#000000' }}>New Release</Text>
                <View style={styles.NewReleaseband}>
                    <View>
                        <Pressable onPress={() => {
                            setChoose({
                                logo: "../img/lotus.png",
                                img: "../img/Lotus_Eletre.png",
                                name: "LOTUS ELETRE"
                            }), console.log(choose)}
                        }>
                            <Image
                                style={styles.NewRelease}
                                source={require('../img/Lotus_Eletre.png')}
                            />
                            <View style={styles.NameBand}>
                                <Image
                                    style={styles.Logo}
                                    source={require('../img/lotus.png')}
                                />
                                <Text style={styles.MarginBand}>LOTUS ELETRE</Text>
                            </View>
                        </Pressable>
                    </View>

                    <View>
                        <Pressable onPress={() => {
                            setChoose({
                                logo: "../img/BYD.png",
                                img: "../img/byd_dolphin.png",
                                name: "BYD Dolphin"
                            }), console.log(choose)}
                        }>
                            <Image
                                style={styles.NewRelease}
                                source={require('../img/byd_dolphin.png')}
                            />
                            <View style={styles.NameBand}>
                                <Image
                                    style={styles.Logo}
                                    source={require('../img/BYD.png')}
                                />
                                <Text style={styles.MarginBand}>BYD Dolphin</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={styles.AllBand}>
                <Text style={{ marginTop: 20, fontWeight: 'bold', color: '#000000' }}>Band</Text>
                <View style={styles.Band}>
                    <View>
                        <Image
                            style={styles.BandImg}
                            source={require('../img/tesla.png')}
                        />
                        <Text style={styles.AllNameBand}>TESLA</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.BandImg}
                            source={require('../img/audi.png')}
                        />
                        <Text style={styles.AllNameBand}>AUDI</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.BandImg}
                            source={require('../img/porsche.png')}
                        />
                        <Text style={styles.AllNameBand}>PORSCHE</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.BandImg}
                            source={require('../img/volvo.png')}
                        />
                        <Text style={styles.AllNameBand}>VOLVO</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.BandImg}
                            source={require('../img/aion.jpg')}
                        />
                        <Text style={styles.AllNameBand}>AION</Text>
                    </View>
                </View>
            </View>

            <View style={{ alignItems: "center", marginTop: 40 }}>
                <Pressable style={styles.Continue} onPress={() => {
                    navigation.navigate('Add_vehicle_detail')
                }}>
                    <Text style={{ fontWeight: 'bold', color: "#FFFFFF" }}>CONTINUE</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default Add_vehicle

const styles = StyleSheet.create({
    AddVehicle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000'
    },
    AddVehicleText: {
        color: '#000000'
    },
    NewRelease: {
        width: 200,
        height: 100
    },
    Logo: {
        width: 40,
        height: 25
    },
    NameBand: {
        flexDirection: 'row',
        marginTop: 10,
        alignSelf: "center"
    },
    MarginBand: {
        fontWeight: 'bold',
        marginLeft: 10,
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
    }
})
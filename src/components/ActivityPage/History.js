import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const History = ({ navigation }) => {
    return (
        <View style={styles.History}>
            <View style={styles.CardHistory}>
                <Image source={require('../../../img/CO2.png')} style={styles.ActtvityImage} />
                <View>
                    <Text style={styles.DetailHistory}>{0.01} Kgly</Text>
                    <Text style={styles.DetailHistory}>CO2</Text>
                    <Text style={styles.DetailHistory}>Reduction</Text>
                </View>
            </View>
            <View style={styles.CardHistory}>
                <Image source={require('../../../img/Tree.png')} style={styles.ActtvityImage} />
                <View style={styles.DetailHistory}>
                    <Text style={styles.DetailHistory}>{0.61} Treesly</Text>
                    <Text style={styles.DetailHistory}>Tree</Text>
                    <Text style={styles.DetailHistory}>Planting</Text>
                </View>
            </View>
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    ActtvityImage: {
        height: 70,
        width: 70,
        marginHorizontal: 10
    },
    DetailHistory: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'white',
        // marginRight: 5
    },
    CardHistory: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    History: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#0068C6',
        borderRadius: 11,
        // height: "35%",
        height: 150,
        marginVertical: "7%"
    }
})
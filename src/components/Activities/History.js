import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const History = () => {
    return (
        <View style={styles.History}>
            <View style={styles.CardHistory}>
                <Image source={require('../../../images/CO2.png')} style={styles.ActtvityImage} />
                <View>
                    <Text style={styles.DetailHistory}>{0.01} Kgly</Text>
                    <Text style={styles.DetailHistory}>CO2</Text>
                    <Text style={styles.DetailHistory}>Reduction</Text>
                </View>
            </View>

            <View style={styles.CardHistory}>
                <Image source={require('../../../images/Tree.png')} style={styles.ActtvityImage} />
                <View>
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
        height: 55,
        width: 50,
        marginHorizontal: 10
    },
    DetailHistory: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white',
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
        height: 150,
        marginVertical: 25
    }
})
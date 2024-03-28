import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Status = () => {
    return (
        <View>
            <View>
                <Text style={styles.Head}>Status</Text>
                <View>
                    
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
});


export default Status
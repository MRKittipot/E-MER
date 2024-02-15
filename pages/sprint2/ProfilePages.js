import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
export default function ProfilePages() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello ProfilePages
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: "bold",
        fontSize: 30,
        color: 'black'
    }
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Defining the ActivitiesPage functional component
export default function ActivitiesPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello ActivitiesPage
            </Text>
        </View>
    );
}

// Defining styles using StyleSheet.create
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

import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Loading = ({ setIsPaymentAccepted }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPaymentAccepted(true); // Simulate payment acceptance after 5 seconds
        }, 5000);

        return () => clearTimeout(timer); // Clean up the timer
    }, [setIsPaymentAccepted]);

    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loading;

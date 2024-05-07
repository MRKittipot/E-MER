import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import Icon from 'react-native-vector-icons/FontAwesome5';

const CallButton = () => {
    const navigation = useNavigation(); // Access navigation object

    const handlePress = () => {
        navigation.navigate('Call'); // Navigate to the 'Call' screen
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.tabIconContainer}>
                <Icon name="car" size={30} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    tabIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CallButton;

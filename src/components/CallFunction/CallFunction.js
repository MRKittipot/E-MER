// Call.js

import React from 'react';
import { TouchableOpacity, Animated, StyleSheet, Dimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window');

const CallFunction = ({ slideUpAnimation, handleClose, slideUpHeight }) => {
    return (
        <Animated.View style={[styles.detailContainer, { height: 370, transform: [{ translateY: slideUpAnimation.interpolate({ inputRange: [0, 1], outputRange: [slideUpHeight, 0] }) }] }]}>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                <Icon name="close-circle" size={30} color="red" />
            </TouchableOpacity>
            <View style={styles.callContent}>
                {/* Add your call content here */}
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    detailContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        elevation: 5,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    callContent: {
        // Add styles for call content here
    },
});

export default CallFunction;

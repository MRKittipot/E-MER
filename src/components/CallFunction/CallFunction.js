import React from 'react';
import { TouchableOpacity, Animated, StyleSheet, Dimensions, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window');

const Call = ({ slideUpAnimation, handleClose, slideUpHeight }) => {

    const randonTimeNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randonTime = randonTimeNumber(5, 30)

    return (
        <Animated.View style={[styles.detailContainer, { height: 370, transform: [{ translateY: slideUpAnimation.interpolate({ inputRange: [0, 1], outputRange: [slideUpHeight, 0] }) }] }]}>
            <View>
                <Text style={styles.textOnHeader}>Charging car details</Text>
                <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                    <Icon name="close-circle" size={30} color="red" />
                </TouchableOpacity>
            </View>

            <View style={styles.callDetailUser}>
                <Text style={{}}>Name: John Doe</Text>
                <Text>Electric vehicle charging service staff</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text>Distance : 10.0 KM</Text>
                    <Text>Time to arrive : {randonTime} minute</Text>
                </View>
            </View>

            {/* <View>
                <Text>Slove type: Type A</Text>
            </View>


            <View>
                <Text>Slove type: Type A</Text>
            </View> */}

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={{ color: "#fff" }}>Accept to pay</Text>
                </TouchableOpacity>
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
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        elevation: 5,
    },
    closeButton: {
        position: 'absolute',
        top: 2,
        right: 10,
    },
    textOnHeader: {
        textAlign: 'center',
        top: 2,
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    buttonStyle: {
        backgroundColor: "#0068C9",
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 50,
        borderRadius: 20,
        bottom: height * 0.020,
        fontWeight: 'bold',
    },
    callDetailUser:{
        top: 15
    }
});

export default Call;

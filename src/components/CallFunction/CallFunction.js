import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Animated, StyleSheet, Dimensions, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const { height } = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';

const CallFunction = ({ slideUpAnimation, handleClose, slideUpHeight, setIsPaymentAccepted }) => {
    const navigation = useNavigation();

    const randomTimeNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomTime = randomTimeNumber(5, 30)

    const [userName, setUserName] = useState('');
    const [selectedOption, setSelectedOption] = useState(null); // State variable to track selected option

    useEffect(() => {
        const getUserInfo = async () => {
          try {
            const userInfo = await AsyncStorage.getItem('user');
            if (userInfo !== null) {
              const user = JSON.parse(userInfo);
              setUserName(user.Name);
            }
          } catch (error) {
            console.log('Error retrieving user info:', error);
          }
        };
        getUserInfo();
    }, []);

    const handleAcceptToPay = async () => {
        try {
            const res = await axios.post('http://10.0.2.2:5000/api/reservation/savebill', {
                typecharger: selectedOption.value, // Use the selected option value
                userName: userName
            });
            console.log("Response", res.data);
            navigation.navigate('Summaryorder', { selectedOption });
            setIsPaymentAccepted(true);
        } catch (error) {
            console.log("Error", error);
        }
    }

    return (
        <Animated.View style={[styles.detailContainer, { height: 370, transform: [{ translateY: slideUpAnimation.interpolate({ inputRange: [0, 1], outputRange: [slideUpHeight, 0] }) }] }]}>
            <View>
                <Text style={styles.textOnHeader}>Charging car details</Text>
                <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                    <Icon name="close-circle" size={30} color="red" />
                </TouchableOpacity>
            </View>

            <View style={styles.callDetailUser}>
                <Text style={styles.nameUser}>{userName}</Text>
                <Text style={styles.serviceDetail}>Electric vehicle charging service staff</Text>
                <View style={{ flexDirection: 'row', marginBottom: 20}}>
                    <Text style={{marginRight: 20}}>Distance : 10.0 KM</Text>
                    <Text>Time to arrive : {randomTime} minute</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={{fontSize : 15, fontWeight: 'bold', color: '#000000', marginBottom: 10}}>Slot tpye</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <TouchableOpacity 
                        style={[styles.radioButton, selectedOption && selectedOption.id === 'option1' ? styles.radioButtonSelected : null]}
                        onPress={() => setSelectedOption({ id: 'option1', value: 'CSS2' })}
                    >
                        <Icon2 name="ev-plug-ccs2" size={30} color="#000000" />
                        <Text style={styles.radioButtonText}>CCS2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.radioButton, selectedOption && selectedOption.id === 'option2' ? styles.radioButtonSelected : null]}
                        onPress={() => setSelectedOption({ id: 'option2', value: 'TYPE2' })}
                    >
                        <Icon2 name="ev-plug-type2" size={30} color="#000000" />
                        <Text style={styles.radioButtonText}>Type2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.radioButton, selectedOption && selectedOption.id === 'option3' ? styles.radioButtonSelected : null]}
                        onPress={() => setSelectedOption({ id: 'option3', value: 'CHAdeMO' })}
                    >
                        <Icon2 name="ev-plug-chademo" size={30} color="#000000" />
                        <Text style={styles.radioButtonText}>Chademo</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle} onPress={handleAcceptToPay}>
                    <Text style={{ color: "#fff" }}>Accept to pay</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

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
    nameUser: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
        marginBottom: 0,
    },
    serviceDetail: {
        color: '#000',
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
    callDetailUser: {
        top: 15
    },
    radioButton: {
        marginLeft: 5,
        marginRight: 'auto',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 30,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom: 10,
    },
    radioButtonSelected: {
        backgroundColor: '#04D85F',
    },
    radioButtonText: {
        marginLeft: 10, // Adjust the gap between icon and text
        fontWeight: 'bold',
    }
});

export default CallFunction;

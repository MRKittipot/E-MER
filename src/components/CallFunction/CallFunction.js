<<<<<<< HEAD
import React from 'react';
import { TouchableOpacity, Animated, StyleSheet, Dimensions, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
=======
import React, { useMemo, useState} from 'react';
import { TouchableOpacity, Animated, StyleSheet, Dimensions, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios'; // Fix import statement
import { useNavigation } from '@react-navigation/native'; // Import navigation hooks from react-navigation/native

// test radio
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
>>>>>>> 0105460b3c5a1d2bbdcfc663fce89a2f801cc49e

const { height } = Dimensions.get('window');

const Call = ({ slideUpAnimation, handleClose, slideUpHeight}) => {
    const navigation = useNavigation(); // Get navigation object

<<<<<<< HEAD
    const randonTimeNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randonTime = randonTimeNumber(5, 30)
=======
    const randomTimeNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomTime = randomTimeNumber(5, 30)

    const handleAcceptToPay = async () => {
        try {
            const res = await axios.post('http://10.0.2.2:5000/api/reservation/savebill',
                {
                    typecharger: selectedId

                });
            console.log("Response", res.data);

            // Navigate to Summaryorder and pass selectedId as parameter
            navigation.navigate('Summaryorder', { selectedId });
        } catch (error) {
            console.log("Error", error); // Log the error for debugging
            // Provide appropriate feedback to the user (optional)
        }
    }

    //
    const radioButtons = useMemo(() => ([
        {
            id: 'CSS2', // acts as primary key, should be unique and non-empty string
            label: 'Option 1',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Option 2',
            value: 'option2'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState();

>>>>>>> 0105460b3c5a1d2bbdcfc663fce89a2f801cc49e

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
<<<<<<< HEAD
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
=======
                <View style={{ flexDirection: 'row' }}>
                    <Text>Distance : 10.0 KM</Text>
                    <Text>Time to arrive : {randomTime} minute</Text>
                </View>
            </View>
            <View style={styles.callDetailUser}>
                <RadioGroup
                    radioButtons={radioButtons}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle} onPress={handleAcceptToPay}>
>>>>>>> 0105460b3c5a1d2bbdcfc663fce89a2f801cc49e
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
<<<<<<< HEAD
    callDetailUser:{
=======
    callDetailUser: {
>>>>>>> 0105460b3c5a1d2bbdcfc663fce89a2f801cc49e
        top: 15
    }
});

export default Call;

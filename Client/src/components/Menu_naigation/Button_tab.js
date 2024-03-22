import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Button_tab = ({ opened, toggleOpened }) => {
    // const [] = React.useState(false)
    // const animation = React.useRef(new Animation.Value(0)).current;

    return (
        <TouchableWithoutFeedback>
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

export default Button_tab;
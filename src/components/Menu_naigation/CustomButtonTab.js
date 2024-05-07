import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

const CustomButtonTab = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.iconContainer}>
        <Icon2 name="phone" size={25} color="#0068C9" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    borderRadius: 25,
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default CustomButtonTab;

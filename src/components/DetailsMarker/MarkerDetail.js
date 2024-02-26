import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Linking, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window');

const MarkerDetail = ({ selectedMarker, slideUpAnimation, handleClose, slideUpHeight }) => {

  const handleNavigation = () => {
    const { coordinate } = selectedMarker;
    const { latitude, longitude } = coordinate;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <Animated.View style={[styles.detailContainer, { height: 300, transform: [{ translateY: slideUpAnimation.interpolate({ inputRange: [0, 1], outputRange: [slideUpHeight, 0] }) }] }]}>
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <Icon name="close-circle" size={30} color="red" />
      </TouchableOpacity>
      <View style={styles.detailContent}>
        <Text style={styles.detailTitle}>{selectedMarker.title}</Text>
        <Text>{selectedMarker.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyles} onPress={handleNavigation}>
          <Text style={styles.buttonText}>Go</Text>
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  detailContent: {
    width: width * 0.8,
    marginTop: 0,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#000"
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 70,
    left: (width - width * 0.8) / 2,
    width: width * 0.8,
    alignItems: 'center',
  },
  buttonStyles: {
    backgroundColor: '#0068C9',
    paddingVertical: 12,
    paddingHorizontal: 42,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export default MarkerDetail;

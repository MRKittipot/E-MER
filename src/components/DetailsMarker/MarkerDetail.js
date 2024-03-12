import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Linking, Image } from 'react-native';
import Icon, { Button } from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window');

const MarkerDetail = ({ selectedMarker, slideUpAnimation, handleClose, slideUpHeight }) => {

  const handleNavigation = () => {
    const { coordinate } = selectedMarker;
    const { latitude, longitude } = coordinate;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <Animated.View style={[styles.detailContainer, { height: 350, transform: [{ translateY: slideUpAnimation.interpolate({ inputRange: [0, 1], outputRange: [slideUpHeight, 0] }) }] }]}>
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <Icon name="close-circle" size={30} color="red" />
      </TouchableOpacity>
      <View style={styles.detailContent}>
        <Image style={styles.imageDetail} source={require('../../../images/picON1.png')} />
        <View style={styles.detailContentData}>
          <Text style={styles.detailTitle}>{selectedMarker.title}</Text>
          <Text>{selectedMarker.description}</Text>
        </View>
      </View>

      <View style={styles.chargerContainer}>
        {selectedMarker.charger.map((charger, index) => (
          <Text key={index} style={styles.chargerDetail}>{charger}</Text>
        ))}
      </View>

      {/*statusContainer */}
      <View style={styles.statusContainer}>
        <View style={styles.statusContent}>
          <Text style={{ fontWeight: 'bold' }}>Facilities Available: </Text>
          <Text>{selectedMarker.facilities.join(', ')}</Text>
        </View>
        <View style={styles.statusContent}>
          <Text style={{ fontWeight: 'bold' }}>Distance: </Text>
          <Text>{selectedMarker.distance}</Text>
        </View>
        <View style={styles.statusContent}>
          <Text style={{ fontWeight: 'bold' }}>Availability: </Text>
          <Text>{selectedMarker.availability}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonStyle} onPress={handleNavigation}>
          <Text>Go</Text>
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
    position: 'absolute',
    top: 10,
    right: 10,
  },
  detailContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailContentData: {
    marginLeft: 20,
    flex: 1,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#000",
    marginBottom: 5,
    width: '75%',
  },
  imageDetail: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  statusContainer: {
    marginTop: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  statusContent: {
    // alignItems: 'center',
    // marginBottom: 5,
  },
  chargerContainer: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chargerDetail: {
    marginHorizontal: 42,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  buttonStyle:{
    backgroundColor:"#0068C9",
    alignItems: 'center', 
    justifyContent: 'center', 
    width:100,
    height:50
  }
  
});

export default MarkerDetail;

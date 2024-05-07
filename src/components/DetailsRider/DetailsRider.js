import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Linking, Image } from 'react-native';
import Icon, { Button } from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window');

const DetailsRider = ({ selectedMarker, slideUpAnimation, handleClose, slideUpHeight }) => {

  return (
    <Animated.View style={[styles.detailContainer, { height: 400, transform: [{ translateY: slideUpAnimation.interpolate({ inputRange: [0, 1], outputRange: [slideUpHeight, 0] }) }] }]}>
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
    <View key={index} style={styles.chargerDetail}>
      {charger.includes("CSS2") && (
        <Icon name="cafe-outline" size={30} color="#000" style={{ marginRight: 11 }} />
      )}
      {charger.includes("DCS") && (
        <Icon name="fast-food-outline" size={30} color="#000" style={{ marginRight: 11 }} />
      )}
      <Text style={{ fontWeight: 'bold' }}>{charger}</Text>
    </View>
  ))}
</View>


      {/*statusContainer */}
      <View style={styles.statusContainer}>
        {/* ส่วน Facilities Available */}
        <View style={styles.statusContent}>
          <View style={styles.status}>
            <Text style={{ fontWeight: 'bold' }}>Facilities Available: </Text>
          </View>
          <View style={styles.Facicon}>
            {selectedMarker.facilities.includes("Restroom") && <Icon name="cafe-outline" size={30} color="#000" style={styles.iconFac} />}
            {selectedMarker.facilities.includes("Cafe") && <Icon name="fast-food-outline" size={30} color="#000" style={styles.iconFac} />}
          </View>
          <Text style={{ textAlign: "center" }}>{selectedMarker.facilities.join(' , ')}</Text>
        </View>

        {/* ส่วน Distance */}
        <View style={styles.statusContent}>
          <View style={styles.status}>
            <Text style={{ fontWeight: 'bold' }}>Distance: </Text>
          </View>
          <Text style={{ textAlign: "center" }}>{calculateDistanceFromCurrentLocation()}</Text>
        </View>

        {/* ส่วน Availability */}
        <View style={styles.statusContent}>
          <View style={styles.status}>
            <Text style={{ fontWeight: 'bold' }}>Availability: </Text>
          </View>
          <Text style={{ textAlign: "center" }}>{selectedMarker.availability}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleNavigation}>
          <Text style={{ color: "#fff" }}>Go</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}


export default DetailsRider;


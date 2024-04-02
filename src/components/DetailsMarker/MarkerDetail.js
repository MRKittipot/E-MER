import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Linking, Image } from 'react-native';
import Icon, { Button } from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window');

const MarkerDetail = ({ selectedMarker, slideUpAnimation, handleClose, slideUpHeight }) => {

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 13.726330428,
    longitude: 100.523831238,
  });

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180; // deg2rad below
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      0.5 - Math.cos(dLat) / 2 +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      (1 - Math.cos(dLon)) / 2;
    return R * 2 * Math.asin(Math.sqrt(a));
  };

  const calculateDistanceFromCurrentLocation = () => {
    const distance = calculateDistance(
      currentLocation.latitude,
      currentLocation.longitude,
      selectedMarker.coordinate.latitude,
      selectedMarker.coordinate.longitude
    );
    return `${distance.toFixed(2)} km`;
  };


  const handleNavigation = () => {
    const { coordinate } = selectedMarker;
    const { latitude, longitude } = coordinate;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <Animated.View style={[styles.detailContainer, { height: 370, transform: [{ translateY: slideUpAnimation.interpolate({ inputRange: [0, 1], outputRange: [slideUpHeight, 0] }) }] }]}>
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
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="close-circle" size={30} color="red" style={{ marginRight: 5 }} />
            <Text style={styles.chargerDetail}>{charger}</Text>
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
  status: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    borderColor: "primary"
  },
  chargerContainer: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
  },
  chargerDetail: {
    fontWeight: 'bold',
    borderWidth: 1,
    width: 80,
    height: 40, // ปรับความสูงเพื่อให้ข้อความอยู่ตรงกลางของกล่อง
    borderRadius: 5,
    textAlign: 'center', // จัดให้ข้อความอยู่กลางตามแนวนอน
    lineHeight: 40, // กำหนดความสูงของบรรทัดเท่ากับความสูงของข้อความเพื่อจัดให้อยู่ตรงกลางในแนวดิ่ง
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
    width: 100,
    height: 50,
    borderRadius: 20,
    bottom: height * 0.020,
  },
  Facicon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
    // marginTop: 5,
  },
  iconFac: {
    marginRight: 10,
  }
});

export default MarkerDetail;

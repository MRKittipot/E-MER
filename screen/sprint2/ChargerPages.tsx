import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated, PermissionsAndroid, Platform, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { markersData } from '../../src/Data/markersData';
import MarkerDetail from '../../src/components/DetailsMarker/MarkerDetail';
import SearchBar from '../../src/components/SearchBar/SearchBar';
import CallFunction from '../../src/components/CallFunction/CallFunction';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SLIDE_UP_HEIGHT = height * 0.75; // 75% of screen height

const ChargerPages = ({ navigation }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [showCallButton, setShowCallButton] = useState(true);
  const slideUpAnimation = new Animated.Value(0);

  useEffect(() => {
    // Request location permission
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location to show it on the map.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
        } else {
          console.log('Location permission denied');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
    setShowCallButton(false); // Hide call button when marker is pressed
    Animated.timing(slideUpAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleClose = () => {
    Animated.timing(slideUpAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setSelectedMarker(null);
      setShowCallButton(true); // Show call button when closing marker detail
    });
  };

  const navigateToPhoneNumberPage = () => {
    // Navigate to the phone number page
    navigation.navigate('PhoneNumber');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <SearchBar />
      </View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 13.726330428,
          longitude: 100.523831238,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {markersData.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            onPress={() => handleMarkerPress(marker)}
          >
            <View style={styles.markerContainer}>
              <Icon name="flash" size={20} color="#ffff" />
            </View>
          </Marker>
        ))}
      </MapView>
      ส่วนนี้คือกดจาก marker ถ้าจะให้เขาดู function ให้คอมเม้นอันนั้นนะ อันนี้กูจะให้เขาดู call function เลย comment MarkerDetail ไว้
      // 
      
      {selectedMarker && (
        // <MarkerDetail
        //   selectedMarker={selectedMarker}
        //   slideUpAnimation={slideUpAnimation}
        //   handleClose={handleClose}
        //   slideUpHeight={SLIDE_UP_HEIGHT}
        // />
        <CallFunction
          selectedMarker={selectedMarker}
          slideUpAnimation={slideUpAnimation}
          handleClose={handleClose}
          slideUpHeight={SLIDE_UP_HEIGHT}
        />
      )}
      {showCallButton && (
        <TouchableOpacity style={styles.callButton} onPress={navigateToPhoneNumberPage}>
          <Icon color="#FF4B33" name="call" size={30} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    backgroundColor: '#0068C9',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#0068C9',
    padding: 5,
  },
  searchBox: {
    // Add your styles here
  },
  callButton: {
    position: 'absolute',
    bottom: height * 0.1,
    right: 20,
    backgroundColor: '#0068c6',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    transform: [
      { scaleX: -1 },
    ]
  },
});

export default ChargerPages;
=======
﻿import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated, PermissionsAndroid, Platform, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { markersData } from '../../src/Data/markersData';
import MarkerDetail from '../../src/components/DetailsMarker/MarkerDetail';
import SearchBar from '../../src/components/SearchBar/SearchBar';
import CallFunction from '../../src/components/CallFunction/CallFunction';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SLIDE_UP_HEIGHT = height * 0.75; // 75% of screen height

const ChargerPages = ({ navigation }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [showCallButton, setShowCallButton] = useState(true);
  const slideUpAnimation = new Animated.Value(0);

  useEffect(() => {
    // Request location permission
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location to show it on the map.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
        } else {
          console.log('Location permission denied');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
    setShowCallButton(false); // Hide call button when marker is pressed
    Animated.timing(slideUpAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleClose = () => {
    Animated.timing(slideUpAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setSelectedMarker(null);
      setShowCallButton(true); // Show call button when closing marker detail
    });
  };

  const navigateToPhoneNumberPage = () => {
    // Navigate to the phone number page
    navigation.navigate('PhoneNumber');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <SearchBar />
      </View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 13.726330428,
          longitude: 100.523831238,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {markersData.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            onPress={() => handleMarkerPress(marker)}
          >
            <View style={styles.markerContainer}>
              <Icon name="flash" size={20} color="#ffff" />
            </View>
          </Marker>
        ))}
      </MapView>
      ส่วนนี้คือกดจาก marker ถ้าจะให้เขาดู function ให้คอมเม้นอันนั้นนะ อันนี้กูจะให้เขาดู call function เลย comment MarkerDetail ไว้
      // 
      
      {selectedMarker && (
        // <MarkerDetail
        //   selectedMarker={selectedMarker}
        //   slideUpAnimation={slideUpAnimation}
        //   handleClose={handleClose}
        //   slideUpHeight={SLIDE_UP_HEIGHT}
        // />
        <CallFunction
          selectedMarker={selectedMarker}
          slideUpAnimation={slideUpAnimation}
          handleClose={handleClose}
          slideUpHeight={SLIDE_UP_HEIGHT}
        />
      )}
      {showCallButton && (
        <TouchableOpacity style={styles.callButton} onPress={navigateToPhoneNumberPage}>
          <Icon color="#FF4B33" name="call" size={30} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    backgroundColor: '#0068C9',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#0068C9',
    padding: 5,
  },
  searchBox: {
    // Add your styles here
  },
  callButton: {
    position: 'absolute',
    bottom: height * 0.1,
    right: 20,
    backgroundColor: '#0068c6',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    transform: [
      { scaleX: -1 },
    ]
  },
});

export default ChargerPages;

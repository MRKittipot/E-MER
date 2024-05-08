import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated, PermissionsAndroid, Platform, TouchableOpacity, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import MapViewDirections from 'react-native-maps-directions';
import { markersData } from '../../src/Data/markersData';
import { riderRandom } from '../../src/Data/riderRandom';
import MarkerDetail from '../../src/components/DetailsMarker/MarkerDetail';
import SearchBar from '../../src/components/SearchBar/SearchBar';
import CallFunction from '../../src/components/CallFunction/CallFunction';
import DetailsRider from '../../src/components/DetailsRider/DetailsRider';
import RiderButton from '../../src/components/DetailsRider/RiderButton';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SLIDE_UP_HEIGHT = height * 0.75;

const ChargerPages = ({ navigation }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [showCallButton, setShowCallButton] = useState(true);
  const [isPaymentAccepted, setIsPaymentAccepted] = useState(false);
  const slideUpAnimation = new Animated.Value(0);
  const mapViewRef = React.createRef();

  const [region, setRegion] = useState({
    latitude: 13.738404,
    longitude: 100.517137,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (isPaymentAccepted) {
      const timeout = setTimeout(() => {
        setIsPaymentAccepted(false);
      }, 30000);

      return () => clearTimeout(timeout);
    }
  }, [isPaymentAccepted]);

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
    setShowCallButton(false);
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
      setShowCallButton(true);
    });
  };

  const navigateToPhoneNumberPage = () => {
    navigation.navigate('PhoneNumber');
  };

  const goToMyLocation = () => {
    mapViewRef.current.animateToRegion({
      latitude: 13.738404,
      longitude: 100.517137,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };

  // const goToMyLocation = () => {
  //   mapViewRef.current.animateToRegion(region); // Update map to current region
  // };

  const onLocationSelect = (location) => {
    // Update the map's region to the selected location
    setRegion({
      ...region,
      latitude: location.latitude,
      longitude: location.longitude,
    });
  };

  const origin = { latitude: 13.738404, longitude: 100.517137 };
  const [destination, setDestination] = useState(null);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * riderRandom.length);
    const randomDestination = riderRandom[randomIndex].coordinate;
    setDestination(randomDestination);
  }, []);

  const google_maps_api = 'AIzaSyD-IG6lkLkvi1PnO4YeWbUfkyNkB_j8HRo';

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <SearchBar />
      </View>
      <MapView
        ref={mapViewRef}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 13.738404,
          longitude: 100.517137,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
        style={styles.map}
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
        {isPaymentAccepted && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={google_maps_api}
            strokeWidth={5}
            strokeColor="green"
          />
        )}
        <Marker coordinate={origin}>
          <View style={styles.originMarker}>
            <Icon3 name="bullseye" size={30} color="#4285f4" />
          </View>
        </Marker>
        {isPaymentAccepted && destination && (
          <Marker coordinate={destination}>
            <View style={styles.destinationMarker}>
              <Icon name="battery-charging" size={30} color="#0FA958" />
            </View>
          </Marker>
        )}
      </MapView>
      {selectedMarker && (
  selectedMarker.coordinate.latitude === 13.7263841 && selectedMarker.coordinate.longitude === 100.5067284 ? (
    <CallFunction
      selectedMarker={selectedMarker}
      slideUpAnimation={slideUpAnimation}
      handleClose={handleClose}
      slideUpHeight={SLIDE_UP_HEIGHT}
      setIsPaymentAccepted={setIsPaymentAccepted}
    />
  ) : (
    <MarkerDetail
      selectedMarker={selectedMarker}
      slideUpAnimation={slideUpAnimation}
      handleClose={handleClose}
      slideUpHeight={SLIDE_UP_HEIGHT}
      setIsPaymentAccepted={setIsPaymentAccepted}
    />
  )
)}

      {showCallButton && (   
        <TouchableOpacity style={styles.myLocationButton} onPress={goToMyLocation}>
          <Icon color="#0068c6" name="locate" size={30} />
        </TouchableOpacity>
      )}
      {showCallButton && (   
        <TouchableOpacity style={styles.callButton} onPress={navigateToPhoneNumberPage}>
          <Icon color="#FF4B33" name="call" size={30} />
        </TouchableOpacity>
      )}
      {isPaymentAccepted && (
        <TouchableOpacity
          style={styles.rider}
          onPress={() => {
            Animated.timing(slideUpAnimation, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }).start();
            <DetailsRider />
          }}
        >
          <RiderButton />
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
  searchBox: {},
  originMarker: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
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
  callsButton: {
    position: 'absolute',
    bottom: height * 0.05,
    alignSelf: 'center',
    backgroundColor: '#000000',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    zIndex: 1,
    transform: [{ scaleX: -1 }],
  },
  rider: {
    position: 'absolute',
    bottom: height * 0.1,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    flexDirection: 'row',
    marginLeft: 18,
  },
  myLocationButton: {
    position: 'absolute',
    bottom: height * 0.2,
    right: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default ChargerPages;

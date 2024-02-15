import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();

const initialRegion = {
  latitude: 13.726330428,
  longitude: 100.523831238,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function ChargerPages() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        followsUserLocation={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

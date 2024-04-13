// SearchBar.js
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { markersData } from '../../src/Data/markersData'; // Import markersData
const { height, width } = Dimensions.get('window');

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyA5pxMtmvljUhHhRgv1BTP1LuqAQSJG650',
          language: 'en',
        }}
        onFail={(error) => console.log(error)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50, // Adjust this value to center the search bar vertically
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 20,
    flex: 0.5,
  },
});

export default SearchBar;

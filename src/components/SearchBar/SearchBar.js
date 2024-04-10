// SearchBar.js
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
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
          key: 'AIzaSyD-IG6lkLkvi1PnO4YeWbUfkyNkB_j8HRo',
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
    flex: 0.5
  },
});

export default SearchBar;

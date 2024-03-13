import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BlogPages() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello Blog
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    color: 'black'
  }
});

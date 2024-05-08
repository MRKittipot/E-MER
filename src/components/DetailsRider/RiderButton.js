import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
export default class RiderButton extends Component {
  render() {
    return (
        <View style={styles.riderButton}>
        <View style={styles.leftContent}>
          <Icon2 name="battery-charging" size={30} color="#0FA958" />
          <Text style={styles.statusText}>Staff arrived</Text>
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.statusText}>12 min</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    riderButton : {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      },
      leftContent : {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
      },
      rightContent : {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20
      },
      statusText : {
        fontWeight: 'bold',
      }
})
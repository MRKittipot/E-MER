import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChargeTypeAddVehicle = () => {
  return (
    <View>
      <Icon name="ev-plug-ccs2" size={45} color="#000000" />
      <Icon name="ev-plug-type2" size={45} color="#000000" />
      <Icon name="ev-plug-chademo" size={45} color="#000000" />
    </View>
  )
}

export default ChargeTypeAddVehicle

const styles = StyleSheet.create({
  ChargeTypeAddVehicleCard: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  ChargeType: {
    flexDirection: "row",
    alignItems: "center"
  },
  ChargeTypeText: {
    marginLeft: 10
  }
})
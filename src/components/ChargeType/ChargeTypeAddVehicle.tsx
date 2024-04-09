import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChargeTypeAddVehicle = () => {
  return (
    <View style={styles.ChargeTypeAddVehicleCard}>

      <View>
        <View style={styles.ChargeType}>
          <Icon name="ev-plug-ccs2" size={45} color="#000000" />
          <Text style={styles.ChargeTypeText}>CCS2</Text>
        </View>
        <Text style={styles.BottomText}>DC charger CCS2</Text>
      </View>

      <View>
        <View style={styles.ChargeType}>
          <Icon name="ev-plug-type2" size={45} color="#000000" />
          <Text style={styles.ChargeTypeText}>TYPE2</Text>
        </View>
        <Text style={styles.BottomText}>Charger Typer2</Text>
      </View>

      <View>
        <View style={styles.ChargeType}>
          <Icon name="ev-plug-chademo" size={45} color="#000000" />
          <Text style={styles.ChargeTypeText}>CHAdeMO</Text>
        </View>
        <Text style={styles.BottomText}>Charger Chademo</Text>
      </View>

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
    alignItems: "center",
    borderColor: "#D9D9D9",
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 4
  },
  ChargeTypeText: {
    marginLeft: 5,
    color: "#000000",
    fontWeight: "bold"
  },
  BottomText: {
    alignSelf: "center",
    fontSize: 10,
    marginTop: 5,
    color: "#000000",
    fontWeight: "bold"
  },
  
})
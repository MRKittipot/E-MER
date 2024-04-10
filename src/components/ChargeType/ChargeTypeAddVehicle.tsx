import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChargeTypeAddVehicle = () => {

  const [button1Pressed, setButton1Pressed] = useState(false);
  const [button2Pressed, setButton2Pressed] = useState(false);
  const [button3Pressed, setButton3Pressed] = useState(false);

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
      paddingHorizontal: 4,
    },
    button1: {
      backgroundColor: button1Pressed ? '#04D85F' : null,
    },
    button2: {
      backgroundColor: button2Pressed ? '#04D85F' : null,
    },
    button3: {
      backgroundColor: button3Pressed ? '#04D85F' : null,
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


  return (
    <View style={styles.ChargeTypeAddVehicleCard}>

      <View>
        <TouchableOpacity style={[styles.ChargeType, styles.button1]} onPress={() => { setButton1Pressed(true); setButton2Pressed(false); setButton3Pressed(false); }}>
          <Icon name="ev-plug-ccs2" size={45} color="#000000" />
          <Text style={styles.ChargeTypeText}>CCS2</Text>
        </TouchableOpacity>
        <Text style={styles.BottomText}>DC charger CCS2</Text>
      </View>

      <View>
        <TouchableOpacity style={[styles.ChargeType, styles.button2]} onPress={() => { setButton1Pressed(false); setButton2Pressed(true); setButton3Pressed(false); }}>
          <Icon name="ev-plug-type2" size={45} color="#000000" />
          <Text style={styles.ChargeTypeText}>TYPE2</Text>
        </TouchableOpacity>
        <Text style={styles.BottomText}>Charger Typer2</Text>
      </View>

      <View>
        <TouchableOpacity style={[styles.ChargeType, styles.button3]} onPress={() => { setButton1Pressed(false); setButton2Pressed(false); setButton3Pressed(true); }}>
          <Icon name="ev-plug-chademo" size={45} color="#000000" />
          <Text style={styles.ChargeTypeText}>CHAdeMO</Text>
        </TouchableOpacity>
        <Text style={styles.BottomText}>Charger Chademo</Text>
      </View>

    </View>
  )
}

export default ChargeTypeAddVehicle

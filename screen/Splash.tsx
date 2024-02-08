import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Onboarding from './Onboardings'
import * as Animatable from 'react-native-animatable';

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboardings')
    }, 3500)
  }, [])

  return (
    <View style={{ height: "100%", alignItems: "center" }}>
      <Animatable.View animation="fadeIn" delay={1800} style={{ flex: 0.95, justifyContent: "center" }}>
        <Animatable.Image animation="fadeIn" delay={1800} style={styles.img_splash} source={require('../images/logo_emer-transformed.png')} />
      </Animatable.View>
      <Animatable.View animation="fadeIn" delay={1800} style={{ flex: 0.05, justifyContent: "center" }}>
        <Animatable.Text animation="fadeIn" delay={1800} style={styles.text_splash}>Welcome to EV for emergency</Animatable.Text>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  img_splash: {
    height: 375,
    width: 230
  },
  text_splash: {
    marginBottom: "auto",
    fontWeight: "bold",
    color: "#0068C9",
    fontSize: 16
  }
})

export default Splash 
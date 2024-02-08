import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import GGLogoutbutton from '../src/components/Login/GoogleLogout';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
        <Text style={{fontWeight:'bold', fontSize:24, color:'#000'}}> HomePage </Text>
        <GGLogoutbutton/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

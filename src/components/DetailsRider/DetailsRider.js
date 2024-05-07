import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Linking, Image } from 'react-native';
import Icon, { Button } from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window');

const DetailsRider = ({ selectedMarker, slideUpAnimation, handleClose, slideUpHeight }) => {
  
  return (
    <Animated.View style={[styles.detailContainer, { height: 400, transform: [{ translateY: slideUpAnimation.interpolate({ inputRange: [0, 1], outputRange: [slideUpHeight, 0] }) }] }]}>
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <Icon name="close-circle" size={30} color="red" />
      </TouchableOpacity>
      <View style={styles.detailContent}>
        <Image style={styles.imageDetail} source={require('../../../images/picON1.png')} />
        <View style={styles.detailContentData}>
          <Text style={styles.detailTitle}>{selectedMarker.title}</Text>
          <Text>{selectedMarker.description}</Text>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  detailContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailContentData: {
    marginLeft: 20,
    flex: 1,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#000",
    marginBottom: 5,
    width: '75%',
  },
  imageDetail: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  statusContainer: {
    marginTop: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  status: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    borderColor: "primary"
  },
  chargerContainer: {
    marginTop: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
  },
  chargerDetail: {
    fontWeight: 'bold',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    width: 100,
    height: 40, // ปรับความสูงเพื่อให้ข้อความอยู่ตรงกลางของกล่อง
    borderRadius: 5,
    textAlign: 'center', // จัดให้ข้อความอยู่กลางตามแนวนอน
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  buttonStyle: {
    backgroundColor: "#0068C9",
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderRadius: 20,
    bottom: height * 0.020,
  },
  Facicon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
    // marginTop: 5,
  },
  iconFac: {
    marginRight: 10,
  }
});


export default DetailsRider;


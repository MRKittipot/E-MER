import {
  View,
  Text,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const PhoneNumber = () => {

  const navigation = useNavigation();

  const handleCall = () => {
    const phoneNumber = 'tel:${191}';
    Linking.openURL(phoneNumber);
  };
  const handleCall4 = () => {
    const phoneNumber = 'tel:${1554}';
    Linking.openURL(phoneNumber);
  };
  const handleCall5 = () => {
    const phoneNumber = 'tel:${023111217}';
    Linking.openURL(phoneNumber);
  };
  const handleCall6 = () => {
    const phoneNumber = `tel:1646`;
    Linking.openURL(phoneNumber);
  };
  const handleCall10 = () => {
    const phoneNumber = 'tel:${1137}';
    Linking.openURL(phoneNumber);
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.emergencyText}>Emergency Number</Text>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'flex-start',
          margin: 10,
          paddingBottom: 50
        }}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity onPress={handleCall} style={styles.BTIn1}>
            <Image source = {require('../../assets/ตำรวจ.png')} style ={styles.Img1} />
            <View style={{marginLeft: 5}}>
              <Text style={styles.Fornt13L1P1}>เหตุด่วนเหตุร้าย</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCall4} style={styles.BTIn1}>
            <Image source = {require('../../assets/วชิรพยาบาล.png')} style ={styles.Img4} />
            <View>
              <Text style={styles.Fornt13L2P21}>หน่วยแพทย์กู้ชีวิต</Text>
              <Text style={styles.Fornt13L2P2}>วชิรพยาบาล</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity onPress={handleCall10} style={styles.BTIn2}>
            <Image source = {require('../../assets/จส.100.png')} style ={styles.Img7} />
            <View>
              <Text style={styles.Fornt13L5P221}>จส.100</Text>
              <Text style={styles.Fornt13L5P2212}>แจ้งเหตุด่วน</Text>
              <Text style={styles.Fornt13L5P222}>เพื่อประสานงานต่อ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCall6} style={styles.BTIn2}>
            <Image source = {require('../../assets/หน่วยแพทย์ฉุกเฉิน.png')} style ={styles.Img14} />
            <View>
              <Text style={styles.Fornt13L3P11}>หน่วยแพทย์</Text>
              <Text style={styles.Fornt13L3P22}>ฉุกเฉิน (กทม.)</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity onPress={handleCall5} style={styles.BTIn1}>
            <View style={{marginLeft: 5}}>
              <Text style={styles.Fornt13CCEVM}>Call Center EVM</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BTIn1} onPress={() => navigation.navigate('MPhoneNumber')}>
            <View>
              <Text style={styles.Fornt13L3P2}>เบอร์ฉุกเฉินอื่น ๆ</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emergencyText: {
    textAlign: 'left',
    fontSize: 24,
    fontWeight: '900',
    marginLeft: 25,
    color: '#333333',
    marginTop: 50,
  },
  BTIn1: {
    width: 175,
    height: 85,
    backgroundColor: '#0068C6',
    margin: 5,
    borderRadius: 25,
    flexDirection: 'row',
  },
  BTIn2: {
    width: 175,
    height: 85,
    backgroundColor: '#57A8E8',
    margin: 5,
    borderRadius: 25,
    flexDirection: 'row',
  },
  Fornt13L3P2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 30,
    marginLeft: 15,
  },
  Fornt13L1P1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 33,
    
  },
  Fornt13CCEVM: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 30,
    marginLeft:9
  },
  Fornt13L2P21: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 22,
  },
  Fornt13L3P11: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 23,
    marginLeft : 15
  },
  Fornt13L5P222: {   //จส100 บรรทัด 1
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft : -3
  },
  Fornt13L2P2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 15,
  },
  Fornt13L5P221: {  //จส100 บรรทัด 1
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop:12,
    marginLeft : 30
  },
  Fornt13L5P2212: {  //จส100 บรรทัด 1
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft : 18
  },
  Fornt13L3P22: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 10,
  },
  Img1 : {
    width: 50, 
    height: 50, 
    marginTop: 18, 
    marginLeft: 5
  },
  Img14 : {
    width: 50, 
    height: 50, 
    marginTop: 18, 
    marginLeft: 2
  },
  Img4 : {
    width: 50, 
    height: 48, 
    marginTop: 20, 
    marginLeft: 3
  },
  Img7 : {
    width: 45, 
    height: 80, 
    marginLeft: 3,
    marginTop : 3
  },
});

export default PhoneNumber;

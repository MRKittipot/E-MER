import {
  View,
  Text,
  ScrollView,
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
            <View style={{marginLeft: 5}}>
              <Text style={styles.Fornt13L1P1}>เหตุด่วนเหตุร้าย</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCall4} style={styles.BTIn1}>
            <View>
              {/* <Text style={styles.Fornt13L1P2}>กองปราบปราม</Text> */}
              <Text style={styles.Fornt13L2P21}>หน่วยแพทย์กู้ชีวิต</Text>
              <Text style={styles.Fornt13L2P2}>วชิรพยาบาล</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity onPress={handleCall10} style={styles.BTIn2}>
            <View style={{marginLeft: 5}}>
              {/* <Text style={styles.Fornt13L1P1}>ตำรวจทางหลวง</Text> */}
              <Text style={styles.Fornt13L5P221}>จส.100 แจ้งเหตุด่วน</Text>
              <Text style={styles.Fornt13L5P222}>เพื่อประสานงานต่อ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCall6} style={styles.BTIn2}>
            <View>
              {/* <Text style={styles.Fornt13L2P21}>หน่วยแพทย์กู้ชีวิต</Text>
              <Text style={styles.Fornt13L2P2}>วชิรพยาบาล</Text> */}
              <Text style={styles.Fornt13L3P11}>หน่วยแพทย์ฉุกเฉิน</Text>
              <Text style={styles.Fornt13L3P22}>(กทม.)</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity onPress={handleCall5} style={styles.BTIn1}>
            <View style={{marginLeft: 5}}>
              {/* <Text style={styles.Fornt13L3P11}>สถาบันการแพทย์</Text>
              <Text style={styles.Fornt13L3P12}>ฉุกเฉินแห่งชาติ</Text> */}
              <Text style={styles.Fornt13L1P1}>Call Center EVM</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BTIn1} onPress={() => navigation.navigate('MPhoneNumber')}>
            <View>
              {/* <Text style={styles.Fornt13L3P11}>หน่วยแพทย์ฉุกเฉิน</Text>
              <Text style={styles.Fornt13L3P22}>(กทม.)</Text> */}
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 30,
    marginLeft: 10,
  },
  Fornt13L2P21: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 18,
    marginLeft: 10,
  },
  Fornt13L3P11: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 17,
    marginLeft: 7,
  },
  Fornt13L5P222: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 5,
  },
  Fornt13L2P2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 35,
  },
  Fornt13L5P221: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop:17,
  },
  Fornt13L3P22: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 55,
  }
});

export default PhoneNumber;
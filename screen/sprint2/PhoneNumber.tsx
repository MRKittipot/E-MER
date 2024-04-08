import {
  View,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

const PhoneNumber = () => {
  const handleCall = () => {
    const phoneNumber = 'tel:${191}';
    Linking.openURL(phoneNumber);
  };
  const handleCall2 = () => {
    const phoneNumber2 = 'tel:${1195}';
    Linking.openURL(phoneNumber2);
  };
  const handleCall3 = () => {
    const phoneNumber = 'tel:${1193}';
    Linking.openURL(phoneNumber);
  };
  const handleCall4 = () => {
    const phoneNumber = 'tel:${1554}';
    Linking.openURL(phoneNumber);
  };
  const handleCall5 = () => {
    const phoneNumber = 'tel:${1669}';
    Linking.openURL(phoneNumber);
  };
  const handleCall6 = () => {
    const phoneNumber = `tel:1646`;
    Linking.openURL(phoneNumber);
  };
  const handleCall7 = () => {
    const phoneNumber = 'tel:${1543}';
    Linking.openURL(phoneNumber);
  };
  const handleCall8 = () => {
    const phoneNumber = 'tel:${1196}';
    Linking.openURL(phoneNumber);
  };
  const handleCall9 = () => {
    const phoneNumber = 'tel:${199}';
    Linking.openURL(phoneNumber);
  };
  const handleCall10 = () => {
    const phoneNumber = 'tel:${1137}';
    Linking.openURL(phoneNumber);
  };
  const handleCall11 = () => {
    const phoneNumber = 'tel:${1146}';
    Linking.openURL(phoneNumber);
  };
  const handleCall12 = () => {
    const phoneNumber = 'tel:${1167}';
    Linking.openURL(phoneNumber);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'flex-start',
        margin: 10,
        paddingBottom: 50
      }}>
      <Text
        style={{
          textAlign: 'left',
          fontSize: 24,
          fontWeight: '900',
          margin: 15,
          color: '#333333',
          marginTop: 40,
        }}>
        Emergency Number
      </Text>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity onPress={handleCall} style={style.BTIn1}>
          <View style={{marginLeft: 5}}>
            <Text style={style.Fornt13L1P1}>เหตุด่วนเหตุร้าย</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall2} style={style.BTIn1}>
          <View>
            <Text style={style.Fornt13L1P2}>กองปราบปราม</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity onPress={handleCall3} style={style.BTIn2}>
          <View style={{marginLeft: 5}}>
            {/* <Text style={style.Font13P1010}>1193</Text> */}
            <Text style={style.Fornt13L1P1}>ตำรวจทางหลวง</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall4} style={style.BTIn2}>
          <View>
            <Text style={style.Fornt13L2P21}>หน่วยแพทย์กู้ชีวิต</Text>
            <Text style={style.Fornt13L2P2}>วชิรพยาบาล</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity onPress={handleCall5} style={style.BTIn1}>
          <View style={{marginLeft: 5}}>
            <Text style={style.Fornt13L3P11}>สถาบันการแพทย์</Text>
            <Text style={style.Fornt13L3P12}>ฉุกเฉินแห่งชาติ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall6} style={style.BTIn1}>
          <View>
            <Text style={style.Fornt13L3P11}>หน่วยแพทย์ฉุกเฉิน</Text>
            <Text style={style.Fornt13L3P22}>(กทม.)</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity onPress={handleCall7} style={style.BTIn2}>
          <View style={{marginLeft: 5}}>
            <Text style={style.Fornt13L4P12}>การทางพิเศษ</Text>
            <Text style={style.Fornt13L4P2}>แห่งประเทศไทย</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall8} style={style.BTIn2}>
          <View>
            <Text style={style.Fornt13L4P221}>พบเจออุบัติเหตุ</Text>
            <Text style={style.Fornt13L4P222}>ทางน้ำ</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity onPress={handleCall9} style={style.BTIn1}>
          <View style={{marginLeft: 5}}>
            <Text style={style.Fornt13L5P1}>แจ้งเหตุไฟไหม้</Text>
            <Text style={style.Fornt13L5P12}>ดับเพลิง</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall10} style={style.BTIn1}>
          <View>
            <Text style={style.Fornt13L5P221}>จส.100 แจ้งเหตุด่วน</Text>
            <Text style={style.Fornt13L5P222}>เพื่อประสานงานต่อ</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 30}}>
        <TouchableOpacity onPress={handleCall11} style={style.BTIn2}>
          <View style={{marginLeft: 5}}>
            <Text style={style.Fornt13L4P221}>กรมทางหลวง</Text>
            <Text style={style.Fornt13L3P22}>ชนบท</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall12} style={style.BTIn2}>
          <View>
            <Text style={style.Fornt13L6P21}>สถานีวิทยุ</Text>
            <Text style={style.Fornt13L6P22}>ร่วมด้วยช่วยกัน</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
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
  Font13: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  Fornt13L1P2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 30,
    marginLeft: 20,
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
    marginLeft: 9,
  },
  Fornt13L4P221: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 17,
    marginLeft: 20,
  },
  Fornt13L5P1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 17,
    marginLeft: 15,
  },
  Fornt13L4P12: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 17,
    marginLeft: 23,
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
    marginLeft: 5,
  },
  Fornt13L4P222: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 55,
  },
  Fornt13L5P12: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 45,
  },
  Fornt13L6P21: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 17,
    marginLeft: 43,
  },
  Fornt13L4P2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 10,
  },
  Fornt13L3P12: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 15,
  },
  Fornt13L6P22: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 18,
  },
  Fornt13L3P22: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 55,
  },
  Font13P5: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingLeft: 5,
  },
  Font13P10: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingLeft: 10,
  },
  Font13P15: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingLeft: 15,
  },
  Font13P20: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingLeft: 20,
  },
  Font13P25: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingLeft: 25,
  }
});

export default PhoneNumber;

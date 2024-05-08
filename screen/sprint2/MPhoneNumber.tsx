import {
  View,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const MPhoneNumber = () => {
  const navigation = useNavigation();

  const handleCall2 = () => {
    const phoneNumber2 = 'tel:${1195}';
    Linking.openURL(phoneNumber2);
  };
  const handleCall3 = () => {
    const phoneNumber = 'tel:${1193}';
    Linking.openURL(phoneNumber);
  };
  const handleCall5 = () => {
    const phoneNumber = 'tel:${1669}';
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
  const handleCall11 = () => {
    const phoneNumber = 'tel:${1146}';
    Linking.openURL(phoneNumber);
  };
  const handleCall12 = () => {
    const phoneNumber = 'tel:${1677}';
    Linking.openURL(phoneNumber);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'flex-start',
        margin: 10,
        paddingBottom: 50,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={style.page}>
        <View style={{flexDirection:"row", alignItems:"flex-start"}}>
          <Icon
            name="chevron-left"
            size={30}
            color="#000000"
            style={{marginLeft: 20}}
          />
          <Text
            style={{
              textAlign: 'left',
              fontSize: 24,
              fontWeight: '900',
              color: '#333333',
              marginLeft:20
            }}>
            Emergency Number
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity onPress={handleCall3} style={style.BTIn1}>
          <View style={{marginLeft: 5}}>
            <Text style={style.Fornt13L1P1}>ตำรวจทางหลวง</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall2} style={style.BTIn1}>
          <View>
            <Text style={style.Fornt13L1P2}>กองปราบปราม</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity onPress={handleCall5} style={style.BTIn2}>
          <View style={{marginLeft: 5}}>
            <Text style={style.Fornt13L3P11}>สถาบันการแพทย์</Text>
            <Text style={style.Fornt13L3P12}>ฉุกเฉินแห่งชาติ</Text>
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
        <TouchableOpacity onPress={handleCall7} style={style.BTIn1}>
          <View style={{marginLeft: 5}}>
            <Text style={style.Fornt13L4P12}>การทางพิเศษ</Text>
            <Text style={style.Fornt13L4P2}>แห่งประเทศไทย</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall12} style={style.BTIn1}>
          <View>
            <Text style={style.Fornt13L6P21}>สถานีวิทยุ</Text>
            <Text style={style.Fornt13L6P22}>ร่วมด้วยช่วยกัน</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity onPress={handleCall9} style={style.BTIn2}>
          <View style={{marginLeft: 5}}>
            <Text style={style.Fornt13L5P1}>แจ้งเหตุไฟไหม้</Text>
            <Text style={style.Fornt13L5P12}>ดับเพลิง</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall11} style={style.BTIn2}>
          <View>
            <Text style={style.Fornt13L4P2211}>กรมทางหลวง</Text>
            <Text style={style.Fornt13L3P22}>ชนบท</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  page: {
    marginTop: 50,
    margin: -10,
    marginBottom:5
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
  Fornt13L3P11: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 17,
    marginLeft: 7,
  },
  Fornt13L4P221: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 17,
    marginLeft: 20,
  },
  Fornt13L4P2211: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 17,
    marginLeft: 28,
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
    marginLeft: 60,
  },
});

export default MPhoneNumber;

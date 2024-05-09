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
        paddingBottom: 50
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={style.page}>
        <Icon
        name="chevron-left"
        size={30}
        color="#000000"
        style={{marginLeft: 20}}
        />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'left',
          fontSize: 24,
          fontWeight: '900',
          margin: 15,
          color: '#333333',
          marginTop: 20,
        }}>
        Emergency Number
      </Text>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity onPress={handleCall3} style={style.BTIn1}>
          <Image source = {require('../../assets/ตำรวจทางหลวง.png')} style ={style.Img3} />
          <View style={{marginLeft: 5}}>
            <Text style={style.Fornt13L1P1}>ตำรวจทางหลวง</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall2} style={style.BTIn1}>
          <Image source = {require('../../assets/กองปราบปราม.png')} style ={style.Img2} />
          <View>
            <Text style={style.Fornt13L1P2}>กองปราบปราม</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity onPress={handleCall5} style={style.BTIn2}>
          <Image source = {require('../../assets/สถาบันการแพทย์.png')} style ={style.Img1} />
          <View style={{marginLeft: 5}}>
            <Text style={style.Fornt13L3P11}>สถาบันการแพทย์</Text>
            <Text style={style.Fornt13L3P12}>ฉุกเฉินแห่งชาติ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall8} style={style.BTIn2}>
          <Image source = {require('../../assets/พบเจออุบัติเหตุทางน้ำ.png')} style ={style.Img5} />
          <View>
            <Text style={style.Fornt13L4P221}>พบเจออุบัติเหตุ</Text>
            <Text style={style.Fornt13L4P222}>ทางน้ำ</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity onPress={handleCall7} style={style.BTIn1}>
          <Image source = {require('../../assets/การทางพิเศษแห่งประเทศไทย.png')} style ={style.Img3} />
          <View style={{marginLeft: 5}}>
            <Text style={style.Fornt13L4P12}>การทางพิเศษ</Text>
            <Text style={style.Fornt13L4P2}>แห่งประเทศไทย</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall12} style={style.BTIn1}>
          <Image source = {require('../../assets/สถานีวิทยุร่วมด้วยช่วยกัน.png')} style ={style.Img8} />
          <View>
            <Text style={style.Fornt13L6P21}>สถานีวิทยุ</Text>
            <Text style={style.Fornt13L6P22}>ร่วมด้วยช่วยกัน</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity onPress={handleCall9} style={style.BTIn2}>
          <Image source = {require('../../assets/แจ้งเหตุไฟไหม้.png')} style ={style.Img6} />
          <View style={{marginLeft: 5}}>
            <Text style={style.Fornt13L5P1}>แจ้งเหตุไฟไหม้</Text>
            <Text style={style.Fornt13L5P12}>ดับเพลิง</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCall11} style={style.BTIn2}>
          <Image source = {require('../../assets/กรมทางหลวงชนบท.png')} style ={style.Img3} />
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
    paddingBottom: -50
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
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 33,
  },
  Fornt13L1P1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 33,
    marginLeft : -1
  },
  Fornt13L3P11: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 23,
    marginLeft : -5
  },
  Fornt13L4P221: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 23,
    marginLeft: 5,
  },
  Fornt13L4P2211: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 22,
    marginLeft: 8,
  },
  Fornt13L5P1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 23,
  },
  Fornt13L4P12: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 23,
    marginLeft: 5,
  },
  Fornt13L4P222: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 30,
  },
  Fornt13L5P12: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 20,
  },
  Fornt13L6P21: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 22,
    marginLeft: 15,
  },
  Fornt13L4P2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft : -1
  },
  Fornt13L3P12: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 2,
  },
  Fornt13L6P22: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  Fornt13L3P22: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 30,
  },
  Img1 : {
    width: 55, 
    height: 55, 
    marginTop: 15, 
    marginLeft: 2
  },
  Img2 : {
    width: 65, 
    height: 55, 
    marginTop: 17, 
    marginLeft: 3
  },
  Img3 : {
    width: 50, 
    height: 50, 
    marginTop: 18, 
    marginLeft: 8
  },
  Img5 : {
    width: 55, 
    height: 55, 
    marginTop: 15, 
    marginLeft: 3
  },
  Img6 : {
    width: 50, 
    height: 75, 
    marginTop: 7, 
    marginLeft: 10
  },
  Img8 : {
    width: 59, 
    height: 70, 
    marginTop: 12, 
    marginLeft: 5
  }
});

export default MPhoneNumber;

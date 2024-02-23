import { View, Text, Image, ScrollView, Linking,  TouchableOpacity } from 'react-native'
import React from 'react'

const PhoneNumber = () => {

    const handleCall = () => {
        const phoneNumber = 'tel:${191}';
        Linking.openURL(phoneNumber)
      }
      const handleCall2 = () => {
        const phoneNumber2 = 'tel:${1195}';
        Linking.openURL(phoneNumber2)
      }
      const handleCall3 = () => {
        const phoneNumber = 'tel:${1193}';
        Linking.openURL(phoneNumber)
      }
      const handleCall4 = () => {
        const phoneNumber = 'tel:${1154}';
        Linking.openURL(phoneNumber)
      }
      const handleCall5 = () => {
        const phoneNumber = 'tel:${1169}';
        Linking.openURL(phoneNumber)
      }
      const handleCall6 = () => {
        const phoneNumber = `tel:1646`;
        Linking.openURL(phoneNumber)
      }
      const handleCall7 = () => {
        const phoneNumber = 'tel:${1543}';
        Linking.openURL(phoneNumber)
      }
      const handleCall8 = () => {
        const phoneNumber = 'tel:${1154}';
        Linking.openURL(phoneNumber)
      }
      const handleCall9 = () => {
        const phoneNumber = 'tel:${199}';
        Linking.openURL(phoneNumber)
      }
      const handleCall10 = () => {
        const phoneNumber = 'tel:${1137}';
        Linking.openURL(phoneNumber)
      }
      const handleCall11 = () => {
        const phoneNumber = 'tel:${1146}';
        Linking.openURL(phoneNumber)
      }
      const handleCall12 = () => {
        const phoneNumber = 'tel:${1167}';
        Linking.openURL(phoneNumber)
      }
    
  return (
    <ScrollView contentContainerStyle = {{flexGrow: 1, alignItems: 'flex-start', margin: 10}}>
        <Text style={{ textAlign: 'left', fontSize: 24, fontWeight: '900', margin: 15, color: '#333333', marginTop: 20 }}>Emergency Number</Text>
    {/* <Text style={{ textAlign: 'left' }}>Emergency number</Text> */}
    {/* <Text style = {{fontSize: 18, fontWeight: 'bold'}} >SignUp Page เอาไปเชื่อมกับหน้าของริว font-end หน้า Sign-up</Text> */}
    <View style = {{flexDirection: 'row', marginTop: 15}}>
      <TouchableOpacity onPress={handleCall}  style = {{width: 175, height: 85, backgroundColor: '#0068C6', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
        <Image source = {require('../images/ตำรวจ.png')} style ={{ width: 55, height: 55, marginTop: 15, marginLeft: 10}} />
        <View style = {{marginLeft: 5}}>
          <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginTop: 10, marginLeft: 20}}>191</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>เหตุด่วนเหตุร้าย</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCall2} style = {{width: 175, height: 85, backgroundColor: '#0068C6', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
        <Image source = {require('../images/กองปราบปราม.png')} style ={{ width: 70, height: 60, marginTop: 15, marginLeft: 5}} />
        <View>
          <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginTop: 10, marginLeft: 5}}>1195</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>กองปราบปราม</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style = {{flexDirection: 'row', marginTop: 20}}>
      <TouchableOpacity onPress={handleCall3} style = {{width: 175, height: 85, backgroundColor: '#57A8E8', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
        <Image source = {require('../images/ตำรวจทางหลวง.png')} style ={{ width: 55, height: 55, marginTop: 15, marginLeft: 10}} />
        <View style = {{marginLeft: 5}}>
          <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginTop: 10, marginLeft: 10}}>1193</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>ตำรวจทางหลวง</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCall4} style = {{width: 175, height: 85, backgroundColor: '#57A8E8', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
        <Image source = {require('../images/วชิรพยาบาล.png')} style ={{ width: 65, height: 62, marginTop: 10, marginLeft: 5}} />
        <View>
          <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 5}}>1154</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>หน่วยแพทย์กู้ชีวิต</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 10}}>วชิรพยาบาล</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style = {{flexDirection: 'row', marginTop: 20}}>
      <TouchableOpacity onPress={handleCall5} style = {{width: 175, height: 85, backgroundColor: '#0068C6', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
        <Image source = {require('../images/สถาบันการแพทย์.png')} style ={{ width: 55, height: 55, marginTop: 10, marginLeft: 5}} />
        <View style = {{marginLeft: 5}}>
          <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 10}}>1169</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>สถาบันการแพทย์</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 5}}>ฉุกเฉินแห่งชาติ</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCall6} style = {{width: 175, height: 85, backgroundColor: '#0068C6', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
        <Image source = {require('../images/หน่วยแพทย์ฉุกเฉิน.png')} style ={{ width: 55, height: 55, marginTop: 10, marginLeft: 5}} />
        <View>
          <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 10}}>1646</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>หน่วยแพทย์ฉุกเฉิน</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 25}}>(กทม.)</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style = {{flexDirection: 'row', marginTop: 20}}>
      <TouchableOpacity onPress={handleCall7} style = {{width: 175, height: 85, backgroundColor: '#57A8E8', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
        <Image source = {require('../images/การทางพิเศษแห่งประเทศไทย.png')} style ={{ width: 55, height: 55, marginTop: 15, marginLeft: 10}} />
        <View style = {{marginLeft: 5}}>
          <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 10}}>1543</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 5}}>การทางพิเศษ</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>แห่งประเทศไทย</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCall8} style = {{width: 175, height: 85, backgroundColor: '#57A8E8', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
        <Image source = {require('../images/พบเจออุบัติเหตุทางน้ำ.png')} style ={{ width: 66, height: 66, marginTop: 10, marginLeft: 5}} />
        <View>
          <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 5}}>1154</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>พบเจออุบัติเหตุ</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 20}}>ทางน้ำ</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style = {{flexDirection: 'row', marginTop: 20}}>
      <TouchableOpacity onPress={handleCall9} style = {{width: 175, height: 85, backgroundColor: '#0068C6', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
        <Image source = {require('../images/แจ้งเหตุไฟไหม้ดับเพลิง.png')} style ={{ width: 55, height: 80, marginTop: 5, marginLeft: 10}} />
        <View style = {{marginLeft: 5}}>
          <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 15}}>199</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>แจ้งเหตุไฟไหม้</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 15}}>ดับเพลิง</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCall10} style = {{width: 175, height: 85, backgroundColor: '#0068C6', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
        <Image source = {require('../images/จส.100.png')} style ={{ width: 50, height: 85, marginLeft: 5}} />
        <View>
          <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 20}}>1137</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>จส.100 แจ้งเหตุด่วน</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>เพื่อประสานงานต่อ</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style = {{flexDirection: 'row', marginTop: 20, marginBottom: 30}}>
      <TouchableOpacity onPress={handleCall11} style = {{width: 175, height: 85, backgroundColor: '#57A8E8', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
        <Image source = {require('../images/กรมทางหลวงชนบท.png')} style ={{ width: 55, height: 55, marginTop: 15, marginLeft: 10}} />
        <View style = {{marginLeft: 5}}>
          <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 10}}>1146</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>กรมทางหลวง</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 20}}>ชนบท</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCall12} style = {{width: 175, height: 85, backgroundColor: '#57A8E8', margin: 5, borderRadius: 25, flexDirection: 'row'}}>
        <Image source = {require('../images/สถานีวิทยุร่วมด้วยช่วยกัน.png')} style ={{ width: 66, height: 75, marginTop: 10, marginLeft: 5}} />
        <View>
          <Text style = {{fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginLeft: 5}}>1167</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff', paddingLeft: 15}}>สถานีวิทยุ</Text>
          <Text style = {{fontSize: 13, fontWeight: 'bold', color: '#ffffff'}}>ร่วมด้วยช่วยกัน</Text>
        </View>
      </TouchableOpacity>
    </View>

  </ScrollView>
  )
}

export default PhoneNumber
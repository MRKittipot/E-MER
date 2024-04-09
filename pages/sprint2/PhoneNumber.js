import { View, Text, Image, ScrollView, Linking,  TouchableOpacity, StyleSheet } from 'react-native'
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
        const phoneNumber = 'tel:${1554}';
        Linking.openURL(phoneNumber)
      }
      const handleCall5 = () => {
        const phoneNumber = 'tel:${1669}';
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
        const phoneNumber = 'tel:${1196}';
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
    <View style = {{flexDirection: 'row', marginTop: 15}}>
      <TouchableOpacity onPress={handleCall}  style = {style.BTIn1}>
        <Image source = {require('../../images/ตำรวจ.png')} style ={style.Img1} />
        <View style = {{marginLeft: 5}}>
          <Text style = {style.NumBut1}>191</Text>
          <Text style = {style.Font13}>เหตุด่วนเหตุร้าย</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCall2} style = {style.BTIn1}>
        <Image source = {require('../../images/กองปราบปราม.png')} style ={style.Img2} />
        <View>
          <Text style = {style.NumBut2}>1195</Text>
          <Text style = {style.Font13}>กองปราบปราม</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style = {{flexDirection: 'row', marginTop: 20}}>
      <TouchableOpacity onPress={handleCall3} style = {style.BTIn2}>
        <Image source = {require('../../images/ตำรวจทางหลวง.png')} style ={style.Img3} />
        <View style = {{marginLeft: 5}}>
          <Text style = {style.Font13P1010}>1193</Text>
          <Text style = {style.Font13}>ตำรวจทางหลวง</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCall4} style = {style.BTIn2}>
        <Image source = {require('../../images/วชิรพยาบาล.png')} style ={style.Img4} />
        <View>
          <Text style = {style.NumMar5}>1154</Text>
          <Text style = {style.Font13}>หน่วยแพทย์กู้ชีวิต</Text>
          <Text style = {style.Font13P10}>วชิรพยาบาล</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style = {{flexDirection: 'row', marginTop: 20}}>
      <TouchableOpacity onPress={handleCall5} style = {style.BTIn1}>
        <Image source = {require('../../images/สถาบันการแพทย์.png')} style ={style.Img1} />
        <View style = {{marginLeft: 5}}>
          <Text style = {style.NumMar10}>1169</Text>
          <Text style = {style.Font13}>สถาบันการแพทย์</Text>
          <Text style = {style.Font13P5}>ฉุกเฉินแห่งชาติ</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCall6} style = {style.BTIn1}>
        <Image source = {require('../../images/หน่วยแพทย์ฉุกเฉิน.png')} style ={style.Img1} />
        <View>
          <Text style = {style.NumMar10}>1646</Text>
          <Text style = {style.Font13}>หน่วยแพทย์ฉุกเฉิน</Text>
          <Text style = {style.Font13P25}>(กทม.)</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style = {{flexDirection: 'row', marginTop: 20}}>
      <TouchableOpacity onPress={handleCall7} style = {style.BTIn2}>
        <Image source = {require('../../images/การทางพิเศษแห่งประเทศไทย.png')} style ={style.Img3} />
        <View style = {{marginLeft: 5}}>
          <Text style = {style.NumMar10}>1543</Text>
          <Text style = {style.Font13P5}>การทางพิเศษ</Text>
          <Text style = {style.Font13}>แห่งประเทศไทย</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCall8} style = {style.BTIn2}>
        <Image source = {require('../../images/พบเจออุบัติเหตุทางน้ำ.png')} style ={style.Img5} />
        <View>
          <Text style = {style.NumMar5}>1154</Text>
          <Text style = {style.Font13}>พบเจออุบัติเหตุ</Text>
          <Text style = {style.Font13P20}>ทางน้ำ</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style = {{flexDirection: 'row', marginTop: 20}}>
      <TouchableOpacity onPress={handleCall9} style = {style.BTIn1}>
        <Image source = {require('../../images/แจ้งเหตุไฟไหม้ดับเพลิง.png')} style ={style.Img6} />
        <View style = {{marginLeft: 5}}>
          <Text style = {style.NumMar15}>199</Text>
          <Text style = {style.Font13}>แจ้งเหตุไฟไหม้</Text>
          <Text style = {style.Font13P15}>ดับเพลิง</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCall10} style = {style.BTIn1}>
        <Image source = {require('../../images/จส.100.png')} style ={style.Img7} />
        <View>
          <Text style = {style.NumMar20}>1137</Text>
          <Text style = {style.Font13}>จส.100 แจ้งเหตุด่วน</Text>
          <Text style = {style.Font13}>เพื่อประสานงานต่อ</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style = {{flexDirection: 'row', marginTop: 20, marginBottom: 30}}>
      <TouchableOpacity onPress={handleCall11} style = {style.BTIn2}>
        <Image source = {require('../../images/กรมทางหลวงชนบท.png')} style ={style.Img3} />
        <View style = {{marginLeft: 5}}>
          <Text style = {style.NumMar10}>1146</Text>
          <Text style = {style.Font13}>กรมทางหลวง</Text>
          <Text style = {style.Font13P20}>ชนบท</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCall12} style = {style.BTIn2}>
        <Image source = {require('../../images/สถานีวิทยุร่วมด้วยช่วยกัน.png')} style ={style.Img8} />
        <View>
          <Text style = {style.NumMar5}>1167</Text>
          <Text style = {style.Font13P15}>สถานีวิทยุ</Text>
          <Text style = {style.Font13}>ร่วมด้วยช่วยกัน</Text>
        </View>
      </TouchableOpacity>
    </View>

  </ScrollView>
  )
}

const style = StyleSheet.create({
  BTIn1 : {
    width: 175, 
    height: 85, 
    backgroundColor: '#0068C6', 
    margin: 5, 
    borderRadius: 25, 
    flexDirection: 'row',
  },
  BTIn2 : {
    width: 175, 
    height: 85, 
    backgroundColor: '#57A8E8', 
    margin: 5, 
    borderRadius: 25, 
    flexDirection: 'row',
  },
  NumMar5 : {
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#ffffff', 
    marginLeft: 5
  },
  NumMar10 : {
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#ffffff', 
    marginLeft: 10
  },
  NumMar15 : {
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#ffffff', 
    marginLeft: 15
  },
  NumMar20 : {
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#ffffff', 
    marginLeft: 20
  },
  NumBut1 : {
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#ffffff', 
    marginTop: 10, 
    marginLeft: 20
  },
  NumBut2 : {
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#ffffff', 
    marginTop: 10, 
    marginLeft: 5
  },
  Font13 : {
    fontSize: 13, 
    fontWeight: 'bold', 
    color: '#ffffff'
  },
  Font13P5 : {
    fontSize: 13, 
    fontWeight: 'bold', 
    color: '#ffffff',
    paddingLeft: 5
  },
  Font13P10 : {
    fontSize: 13, 
    fontWeight: 'bold', 
    color: '#ffffff',
    paddingLeft: 10
  },
  Font13P15 : {
    fontSize: 13, 
    fontWeight: 'bold', 
    color: '#ffffff',
    paddingLeft: 15
  },
  Font13P20 : {
    fontSize: 13, 
    fontWeight: 'bold', 
    color: '#ffffff',
    paddingLeft: 20
  },
  Font13P25 : {
    fontSize: 13, 
    fontWeight: 'bold', 
    color: '#ffffff',
    paddingLeft: 25
  },
  Font13P1010 : {
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#ffffff', 
    marginTop: 10, 
    marginLeft: 10
  },
  Img1 : {
    width: 55, 
    height: 55, 
    marginTop: 10, 
    marginLeft: 5
  },
  Img2 : {
    width: 70, 
    height: 60, 
    marginTop: 15, 
    marginLeft: 5
  },
  Img3 : {
    width: 55, 
    height: 55, 
    marginTop: 15, 
    marginLeft: 10
  },
  Img4 : {
    width: 65, 
    height: 62, 
    marginTop: 10, 
    marginLeft: 5
  },
  Img5 : {
    width: 66, 
    height: 66, 
    marginTop: 10, 
    marginLeft: 5
  },
  Img6 : {
    width: 55, 
    height: 80, 
    marginTop: 5, 
    marginLeft: 10
  },
  Img7 : {
    width: 50, 
    height: 85, 
    marginLeft: 5
  },
  Img8 : {
    width: 66, 
    height: 75, 
    marginTop: 10, 
    marginLeft: 5
  }
})  

export default PhoneNumber
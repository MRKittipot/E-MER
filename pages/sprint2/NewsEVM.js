import { View, Text, StyleSheet,FlatList, Image } from 'react-native'
import React from 'react'

const NewsEVM = () => {

    const courseList = [
        {
          id : 1,
          name : 'อย่างหล่อ Zeekr 001 ชาร์จเต็มวิ่งไกล 675-750 กิโลเมตร',
          imageUrl : 'https://static.thairath.co.th/media/PZnhTOtr5D3rd9oc9sUhREAcvnMIjnoc9I1FQ0RaqKgqB2q.webp'
        },
        {
          id : 2,
          name : 'ราคามาแล้ว KIA เปิดตัว EV9 เอสยูวีไฟฟ้าเบาะสามแถว 6 ที่นั่ง วิ่งไกล 680 กิโลเมตร',
          imageUrl : 'https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKGsdmw9fNkcGcynTOztAKxcQGsEkIAqvYkh2xIPyEyDprGpeK4gw.webp'
        },
        {
          id : 3,
          name : 'กรุงศรี ออโต้ เผยปี 67 ปล่อยสินเชื่อรถยนต์ไฟฟ้ากว่า 21,048 ล้านบาท',
          imageUrl : 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LTeZVpKhOScx0RGnHrHmyh8GRfvg334nn7swNmNFqJLPCj9yvY.webp'
        }
      ]

  return (
    <View style = {style.container}>
      <Text style = {style.heading}>Activities & News</Text>
      <FlatList
      data = {courseList}
      horizontal = {true}
      showsHorizontalScrollIndicator = {false}
      renderItem = {({item}) =>
      <View>
        <Image source = {{uri : item.imageUrl}} style = {style.image}/>
        <Text style = {style.nameText}>{item.name}</Text>
      </View>
      }
      />
    </View>
  )
}

const style = StyleSheet.create({
    container : {
        marginTop : 15,
        marginLeft : 15
    },
    heading : {
        fontSize : 18,
        color : '#A0A0A0',
        fontWeight : '700',
        textAlign: 'left',
        marginBottom : 10
    },
    image : {
      width : 230,
      height : 140,
      marginRight : 15,
      borderRadius : 5
    },
    nameText : {
      fontSize : 14,
      padding : 5,
      width: 235,
      fontWeight : '600',
      color : '#65676B'
    }
})


export default NewsEVM
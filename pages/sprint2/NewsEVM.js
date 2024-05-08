
import { View, Text, StyleSheet,FlatList, Image } from 'react-native'
import React from 'react'
const NewsEVM = ({data}) => {
    
    const courseList = data.filter((item) => item.type === "E-MER");

  return (
    <View style = {style.container}>
      <Text style = {style.heading}>E-MER News</Text>
      <FlatList
      data = {courseList}
      horizontal = {true}
      showsHorizontalScrollIndicator = {false}
      renderItem = {({item}) =>
      <View>
        <Image source = {{uri : item.urlpic}} style = {style.image}/>
        <Text style = {style.nameText}>{item.title}</Text>
      </View>
      }
      />
    </View>
  )
}

const style = StyleSheet.create({
    container : {
        marginTop : 20,
        marginLeft : 15,
        marginRight : 10 
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

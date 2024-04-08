import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Slider from '../../pages/sprint2/Slider'

const BlogPage = () => {
  return (
    <ScrollView contentContainerStyle = {{flexGrow: 1, margin: 10, paddingBottom: 50}}>
        <View>
        <Text style={style.TextHeader}>Blogs</Text>
        <Text style={style.Textline2}>Information and News about electic cars test</Text>
            <Slider/>
        </View>
    </ScrollView>

  )
}

const style = StyleSheet.create({
    TextHeader : {
        textAlign: 'left', 
        fontSize: 24, 
        fontWeight: '900', 
        marginLeft: 15, 
        color: '#333333', 
        marginTop: 40
    },
    Textline2 : {
      textAlign: 'left', 
      fontSize: 18, 
      marginLeft: 15,
      fontWeight: '700', 
      color: '#A0A0A0', 
      marginTop: 5,
      marginBottom : 15
    }
})  
  

export default BlogPage
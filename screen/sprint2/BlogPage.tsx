import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Slider from '../../pages/sprint2/Slider'

const BlogPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.TextHeader}>Blogs</Text>
      <Text style={styles.Textline2}>Information and News about electric cars</Text>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <Slider />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  TextHeader: {
    fontSize: 24,
    fontWeight: '900',
    color: '#333333',
    marginLeft: 15, 
    marginTop: 40
  },
  Textline2: {
    fontSize: 18,
    fontWeight: '700',
    color: '#A0A0A0',
    marginTop: 5,
    marginLeft: 15, 
    marginBottom: 15
  }
})

export default BlogPage

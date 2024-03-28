import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import PaymentHistory from '../../src/components/Activities/PaymentHistory';
// Defining the ActivitiesPage functional component
export default function ActivitiesPage() {

  // {day, EN_munth, TH_munth, year, name, battery, price} data push in componente
  // ตอนนี้ไม่รู้ว่าจะเก็บแบบใหน list or dict เลยเขียนแบบนี้ไว้ก่อน
  // ข้อมูลตัวเลขไม่ได้นำไปใช้อะไร แค่เขียนไว้ให้รู้ว่าจะมีการแสดง component 3 ครั้งในลูป
  const [data, setData] = useState([1, 2, 3]);
  // fetch history data
  // ...


  return (
    <View>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.Head}>Payment History</Text>

          <TouchableOpacity>
            <Image source={require('../../images/bin.png')} style={styles.bin}/>
            {/* <View /> */} 
            {/* <Text> Login Using Facebook </Text> */}
          </TouchableOpacity>

        </View>

      </View>


      <ScrollView style={styles.ActivityPage}>
        <View>
          {data.map((item) => (
            <View key={item}>
              <PaymentHistory day={"26"} munth={"Mar"} time={"12:03"} name={"Panachai Likhitpanyarat"} battery={80} price={500} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// Defining styles using StyleSheet.create
const styles = StyleSheet.create({
  ActivityPage: {
    marginHorizontal: "7%",
    marginBottom: 170,
  },
  Head: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: "7%",
    marginBottom: "7%"
  },
  bin: {
    height: 25,
    width: 25,
    marginTop: 55,
    marginRight: "7%",
  }

});

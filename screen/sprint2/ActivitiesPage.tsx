import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
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
      <Text style={styles.Head}>Payment History</Text>
      
      <ScrollView style={styles.ActivityPage}>
        <View>
          {data.map((item) => (
            <PaymentHistory day={"26"} EN_munth={"Mar"} TH_munth={"มีนาคม"} year={"2567"} name={"Panachai Likhitpanyarat"} battery={80} price={500} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// Defining styles using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    color: 'black'
  },
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

});

import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text, TextInput } from 'react-native'; // Import TextInput
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';
import {useUserAuth} from '../../context/userContext';
const ReviewPage = ({navigation}) => {
  const [rating, setRating] = useState(0); // เปลี่ยนค่าเริ่มต้นเป็น 0
  const [comment, setComment] = useState(''); // State เพื่อเก็บ comment
  const route = useRoute()
  const {userData} = useUserAuth();
  // ฟังก์ชันที่ใช้ในการเปลี่ยนคะแนน
  const handleRating = (value) => {
    if (rating === value) {
      // ถ้าคะแนนที่ถูกเลือกเป็นค่าเดิม ให้ยกเลิกการเลือกคะแนน
      setRating(0);
    } else {
      setRating(value);
    }
  };
  const { userName,uid,typecharger,ordernumber,createdAt }:any = route.params
  // ตรวจสอบว่าปุ่ม Sent ควรเป็นสีอะไร
  const sentButtonColor = comment.trim() !== '' ? '#0068C6' : '#CCCCCC';

  // ฟังก์ชันสำหรับการกดปุ่ม Sent
  const handleSentPress = () => {
    if (comment.trim() !== '') {
      // ทำสิ่งที่ต้องการเมื่อกดปุ่ม Sent โดย comment ไม่ว่างเปล่า
      console.log('Comment sent:', comment);
      // เปลี่ยนหน้าไปยังหน้าอื่น
      navigation.navigate('Home');
    } else {
      // ทำสิ่งที่ต้องการเมื่อ comment ว่างเปล่า
      console.log('Please enter your comment.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.closeButton}>
        <Icon2
          name="x"
          size={30}
          color="#000000"
          style={{ marginLeft: 20 }}
        />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <View style={styles.circle}>
          <Image
            source= {userData.picurl? {uri: userData.picurl}  : require('../../assets/profile.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{userName}</Text>
          <Text style={styles.orderNumber}>Order number : {ordernumber}</Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((value) => (
          <TouchableOpacity key={value} onPress={() => handleRating(value)}>
            <Icon
              name={rating >= value ? "star" : "star-o"}
              size={30}
              color={rating >= value ? "#FFD700" : "#CCCCCC"}
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.line}></View>
      {/* พื้นที่สำหรับกรอก comment */}
      <TextInput
        style={styles.commentInput}
        placeholder="Enter your comment..."
        onChangeText={(text) => setComment(text)}
        value={comment}
        multiline={true}
      />
      {/* ปุ่ม Sent */}
      <TouchableOpacity
        style={[styles.sentButton, { backgroundColor: sentButtonColor }]}
        onPress={handleSentPress}
        disabled={comment.trim() === ''}>
        <Text style={styles.sentButtonText}>Sent</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  closeButton: {
    marginTop: 50,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 25,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#0068C6',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  textContainer: {
    marginLeft: 20,
  },
  name: {
    fontSize: 22,
    color: '#333333',
    fontWeight: 'bold',
  },
  orderNumber: {
    fontSize: 16,
    color: '#888888',
    marginTop: 5,
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  star: {
    marginRight: 5,
  },
  line: {
    width: '80%',
    height: 1.5,
    backgroundColor: '#CCCCCC',
    alignSelf: 'center',
    marginVertical: 10,
    marginTop: 20,
  },
  commentInput: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    minHeight: 100,
  },
  sentButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  sentButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default ReviewPage;
import React, { useState } from 'react';
import { Modal, View, Text, Button, TextInput, StyleSheet } from 'react-native';

const ResetPasswordModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');

  const resetPassword = () => {
    // โค้ดสำหรับการ reset รหัสผ่านจะถูกเรียกในส่วนนี้
    console.log('Reset password for email:', email);
    // ตั้งค่าอีเมลเป็นค่าว่างหลังจาก reset เสร็จสิ้น
    setEmail('');
    // ปิด Modal
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Open Reset Password Modal" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Enter your email to reset password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Button title="Reset Password" onPress={resetPassword} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default ResetPasswordModal;

import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Omise from 'omise-react-native';
Omise.config('pkey_test_5zer43q8r0e7gtd5ru4', '2015-11-17');

const Test = () => {
  // create Token
  const [token, setToken] = useState(null); // Token ที่สร้างจากฟังก์ชัน createToken
  const [chargeId, setChargeId] = useState(null);



  const createToken = async () => {
    try {
      // สร้าง Troken
      const data = await Omise.createToken({
        card: {
          name: 'JOHN DOE',
          city: 'Bangkok',
          postal_code: '10320',
          number: '4242424242424242',
          expiration_month: '2',
          expiration_year: '2027',
        },
      });
      setToken(data.id);
      console.log('Token:', data.id); // log for look Token
    } catch (error) {
      console.error('Error creating token:', error);
    }
  };

  useEffect(() => {
    createToken();
  }, []);



  // ใช้ Troken ตัดเงิน
  const charge = async () => {
    const privateKey = 'skey_test_5zer43rs1t4yc527zks'; // Private Key

    try {
      const data = await Omise.createSource({
      'type': 'internet_banking_bbl',
      'amount': 100000,
      'currency': 'thb',
      'source': token.id,
      });
      // const data = await Omise.createCharge({
      //   'amount': 100000,
      //   'currency': 'THB',
      //   'source': token,
      // });
      setChargeId(data.id);
      console.log('Charge:', data.id);

    } catch (error) {
      console.error('Error creating charge:', error);
    }
  };






  return (
    <View style={{ marginTop: 250, marginHorizontal: 50 }}>
      <Text>omise</Text>
      <Text>{token}</Text>

      <Button
        onPress={charge}
        title="Buy"
        color="#841584"
      />
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})
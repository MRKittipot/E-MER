import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Summaryorder = () => {
  return (
    <View>
      <View>
        <Text style={style.Header}>Summary Order</Text>
      </View>
      <View>
        <View>
            <Text>
                Name
            </Text>
            <Text>
                Order number
            </Text>
        </View>
        <View>
            <Text>Car brand</Text>
            <Text>Tesla</Text>
        </View>
        <View>
            <Text>
                TypeCharger
            </Text>
            <Text>
                ChAdemo
            </Text>
        </View>
        <View>
            <Text>Location</Text>
            <Text>xxxxxxxxxxx</Text>
        </View>
      </View>
      <View>
        <Text>
            Amount to pay
        </Text>
        <View>
            <Text>Amount</Text>
            <Text>Delivery</Text>
            <Text>Vat</Text>
        </View>
        <Text>Total</Text>
      </View>
      <TouchableOpacity>
        <Text>confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
    Header:{
        color:"#0068c6"
    }
}) 

export default Summaryorder;

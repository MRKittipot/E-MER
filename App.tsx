import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Add_vehicle from './screens/Add_vehicle'
import Add_vehicle_detail from './screens/Add_vehicle_detail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Add_vehicle"
            component={Add_vehicle}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add_vehicle_detail"
            component={Add_vehicle_detail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Octicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BlogPages from '../../../screen/sprint2/BlogPage';
import ChargerPages from '../../../screen/sprint2/ChargerPages';
//////////////////////////////////////////////////////////////////////////////
import ActivitiesPage from '../../../screen/sprint2/ActivitiesPage';
import Status from '../../../screen/Status';
import AddVehicle from '../../../screen/AddVehicle';
import AddVehicleSelecCar from '../../../screen/AddVehicleSelecCar'
//////////////////////////////////////////////////////////////////////////////
import ProfilePages from '../../../screen/sprint2/Profile';
import ChatPages from "../../../screen/sprint2/Chat"
import PhoneNumber from "../../../screen/sprint2/PhoneNumber"
import Button_tab from './Button_tab';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();
const homeIcon = <Icon name="home" size={25} />;
const chargerIcon = <Icon2 name="charging-station" size={25} />;
const historyIcon = <Icon2 name="history" size={25} />;
const personIcon = <Icon3 name="person" size={25} />;

const Tabs_menu = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 60,
          backgroundColor: '#fff',
          padding: 0,
        },
      }}>
      <Tab.Screen
        name="Blog"
        component={BlogPages}
        options={{
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 13,
            // You can add more styles as needed
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Icon
                color={focused ? '#0068C9' : Colors.dark}
                name="home"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Charger"
        component={ChargerPages}
        options={{
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 13,
            // You can add more styles as needed
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Icon2
                color={focused ? '#0068C9' : Colors.dark}
                name="charging-station"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Call"
        component={PhoneNumber}
        options={{
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 13,
            // You can add more styles as needed
          },
          tabBarIcon: ({focused}) => <></>,
        }}
      />
      <Tab.Screen
        // name="Activity"
        // component={ActivitiesPage}
        
        // name="Status"
        // component={Status}

        // name="Add Vehicle"
        // component={AddVehicle}

        name="Select Vehicle"
        component={AddVehicleSelecCar}
        options={{
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 13,
            // You can add more styles as needed
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Icon2
                color={focused ? '#0068C9' : Colors.dark}
                name="history"
                size={25}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePages}
        options={{
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 13,
            // You can add more styles as needed
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Icon3
                color={focused ? '#0068C9' : Colors.dark}
                name="person"
                size={25}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tabs_menu;

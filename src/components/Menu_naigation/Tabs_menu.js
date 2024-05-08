import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Octicons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BlogPages from '../../../screen/sprint2/BlogPage';
import ChargerPages from '../../../screen/sprint2/ChargerPages';
import ActivitiesPage from '../../../screen/sprint2/ActivitiesPage';
import ProfilePages from '../../../screen/sprint2/Profile';
//import ChatPages from "../../../screen/sprint2/Chat"
import PhoneNumber from "../../../screen/sprint2/PhoneNumber"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CallFunction from '../CallFunction/CallFunction';
const Tab = createBottomTabNavigator();
const homeIcon = <Icon name="home" size={25} />;
const chargerIcon = <Icon2 name="charging-station" size={25} />;
const carIcon = <Icon2 name="car-alt" size={25} />;
const historyIcon = <Icon2 name="history" size={25} />;
const personIcon = <Icon2 name="person" size={25} />;
const { height } = Dimensions.get('window');

const Tabs_menu = ({ navigation }) => {

  const [slideUpAnimation] = useState(new Animated.Value(0)); // Initialize slideUpAnimation state
  const [showCallButton, setShowCallButton] = useState(true); // Initialize state to control call button visibility
  const [isPaymentAccepted, setIsPaymentAccepted] = useState(false);

  // Function to handle payment acceptance
  const handleAcceptPayment = () => {
    setIsPaymentAccepted(true);
  };


  // Function to handle sliding up CallFunction component
  const handleSlideUp = () => {
    Animated.timing(slideUpAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setShowCallButton(false); // Hide call button when sliding up
  };




  return (
    <View style={styles.container}>

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
          name="Charger"
          component={ChargerPages}
          options={{
            tabBarLabelStyle: {
              fontWeight: 'bold',
              fontSize: 13,
              // You can add more styles as needed
            },
            tabBarIcon: ({ focused }) => (
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
          name="Blog"
          component={BlogPages}
          options={{
            tabBarLabelStyle: {
              fontWeight: 'bold',
              fontSize: 13,
              // You can add more styles as needed
            },
            tabBarIcon: ({ focused }) => (
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
          name="Call"
          component={PhoneNumber}
          options={{
            tabBarLabelStyle: {
              fontWeight: 'bold',
              fontSize: 13,
              // You can add more styles as needed
            },
            tabBarIcon: ({ focused }) => <></>,
          }}
        />
        <Tab.Screen
          name="Activity"
          component={ActivitiesPage}
          options={{
            tabBarLabelStyle: {
              fontWeight: 'bold',
              fontSize: 13,
              // You can add more styles as needed
            },
            tabBarIcon: ({ focused }) => (
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
            tabBarIcon: ({ focused }) => (
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
      {showCallButton && (
        <TouchableOpacity style={styles.callsButton} onPress={handleSlideUp}>
          <Icon4 color="#FF4B33" name="car-electric-outline" size={30} />
        </TouchableOpacity>
      )}
      {/* CallFunction component */}
      <CallFunction
        slideUpAnimation={slideUpAnimation}
        handleClose={() => {
          // Function to handle sliding down CallFunction component
          Animated.timing(slideUpAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start(() => setShowCallButton(true)); // Show call button when sliding down is complete
        }}
        slideUpHeight={height * 0.75} // Adjust the slide up height as needed
        handleAcceptPayment={handleAcceptPayment} // Pass setIsPaymentAccepted function if needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Make the container relative for absolute positioning of call button
  },
  callsButton: {
    position: 'absolute',
    bottom: 20, // Adjust the distance from the bottom as needed
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    zIndex: 2, // Ensure it's above other components
  },
  tabIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tabs_menu;

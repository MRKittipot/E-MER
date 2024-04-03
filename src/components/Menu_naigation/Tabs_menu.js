import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Octicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BlogPages from '../../../pages/sprint2/BlogPages';
import ChargerPages from '../../../pages/sprint2/ChargerPages';
import ActivitiesPage from '../../../pages/sprint2/ActivitiesPage';
import ProfilePages from '../../../pages/sprint2/ProfilePages';
import CallFunction from '../CallFunction/CallFunction';
import Button_tab from './Button_tab';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();
const homeIcon = <Icon name="home" size={25} />;
const chargerIcon = <Icon2 name="charging-station" size={25} />;
const carIcon = <Icon2 name="car-alt" size={25} />;
const historyIcon = <Icon2 name="history" size={25} />;
const personIcon = <Icon2 name="person" size={25} />;

const Tabs_menu = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    height: 60,
                    backgroundColor: "#fff",
                    padding: 0
                }
            }}
        >
            <Tab.Screen
                name='Blog'
                component={BlogPages}
                options={{
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        fontSize: 13
                        // You can add more styles as needed
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Icon color={focused ? "#0068C9" : Colors.dark} name="home" size={25} />
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Charger' component={ChargerPages}
                options={{
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        fontSize: 13
                        // You can add more styles as needed
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Icon2 color={focused ? "#0068C9" : Colors.dark} name="charging-station" size={25} />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name='Call'
                options={{
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        fontSize: 13
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Icon2 color={focused ? "#0068C9" : 'black'} name="car-alt" size={27} />
                        </View>
                    )
                }}
            >
                {() => (
                    <TouchableOpacity onPress={() => {CallFunction}}>
                        <View style={styles.tab}>
                            <Text style={styles.tabLabel}>Call</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </Tab.Screen>


            <Tab.Screen name='Activity' component={ActivitiesPage}
                options={{
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        fontSize: 13
                        // You can add more styles as needed
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Icon2 color={focused ? "#0068C9" : Colors.dark} name="history" size={25} />
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Profile' component={ProfilePages}
                options={{
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        fontSize: 13
                        // You can add more styles as needed
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Icon3 color={focused ? "#0068C9" : Colors.dark} name="person" size={25} />
                        </View>
                    )
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

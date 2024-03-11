import React, {Component, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Image} from 'react-native-animatable';
import Onboarding from 'react-native-onboarding-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUserAuth} from '../context/userContext';

const {width, height} = Dimensions.get('window');

const NextButton = ({...props}) => (
  <View style={{paddingRight: 10}}>
    <Icon name="arrow-circle-right" size={50} color="#0068C9" {...props} />
  </View>
);

const DoneButton = ({...props}) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
      Get Started
    </Text>
  </TouchableOpacity>
);

const CustomDot = ({selected}) => {
  return (
    <View
      style={[
        styles.dot,
        {
          backgroundColor: selected ? '#0068C9' : '#B4B4B4',
          transform: [{scale: selected ? 1.5 : 1}],
        },
      ]}
    />
  );
};

const Onboardings = ({navigation}) => {
  const handleDone = () => {
    //const { navigation } = this.props;
    navigation.navigate('Signin');
  };

  const {user} = useUserAuth();

  useEffect(() => {
    if (user) {
      navigation.replace('Profile'); //Skip to page that navigate 
    }
  }, [user, navigation]);

  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles={{paddingHorizontal: 20}}
        NextButtonComponent={NextButton}
        DoneButtonComponent={DoneButton}
        DotComponent={CustomDot}
        bottomBarHighlight={false}
        onSkip={handleDone}
        onDone={handleDone}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <Image
                  source={require('../images/picON1.png')}
                  style={styles.pic1}
                />
              </View>
            ),
            title: 'Mobile Charger Service',
            subtitle:
              'Charge Ev from your location when your EV runs out of charge by booking our Mobile Charging Service.',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <Image
                  source={require('../images/picON2.png')}
                  style={styles.pic2}
                />
              </View>
            ),
            title: 'Find an EV Charger',
            subtitle:
              'Easily find an EV Charger near you when your battery is almost done.',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <Image
                  source={require('../images/picON3.png')}
                  style={styles.pic3}
                />
              </View>
            ),
            title: 'Mobile Charger Service',
            subtitle: 'EMER completely done.',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pic1: {
    resizeMode: 'contain',
    height: height * 0.5,
    width: width,
  },
  pic2: {
    resizeMode: 'contain',
    height: height * 0.5,
    width: width,
  },
  pic3: {
    resizeMode: 'contain',
    height: height * 0.45,
    width: width,
  },
  title: {
    color: '#0068C9',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: 'bold',
    color: '#0068C9',
    lineHeight: 32,
    marginTop: 10,
  },
  dot: {
    width: 20,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  button: {
    borderRadius: 20,
    marginRight: 10,
    width: 100,
    height: 45,
    backgroundColor: '#0068C9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Onboardings;

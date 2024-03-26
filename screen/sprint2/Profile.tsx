import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {useUserAuth} from '../../context/userContext';
import {ref, onValue} from 'firebase/database';
import {auth as a, db} from '../../config/Firebaseconfig';
import {signOut} from 'firebase/auth';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation}) => {
  const [Name, setName] = useState('Manoj Kajornroj');
  const [Email, setEmail] = useState('manoj@gmail.com');
  const [userData, setUserData] = useState(null);
  const {user, provider} = useUserAuth();

  const handleLogout = async () => {
    try {
      console.log(provider);
      if (provider == 'password') {
        await signOut(a);
      } else {
        await auth().signOut();
      }
      console.log('User has been signed out');
      navigation.navigate('Signin');
    } catch (error) {
      console.log(error);
      navigation.navigate('Signin');
    }
  };

  useEffect(() => {
    console.log(JSON.stringify(user).length);
    if (JSON.stringify(user).length == 2) {
      navigation.navigate('Signin');
    }
  }, [user]);

  return (
    <View style={style.page}>
      <Text style={style.header}>My Account</Text>
      <View style={style.profilecard}>
        <Image
          source={require('../../assets/google-logo.png')}
          style={style.profileimage}
        />
        <Text style={style.profilename}>{Name}</Text>
        <Text style={style.profilemail}>{user.email}</Text>
        <Text style={style.view} onPress={() => navigation.navigate('Account')}>
          View Profile
        </Text>
      </View>
      <View style={style.optioncard}>
        <View style={style.detailcard}>
          <IconAnt name="car" size={30} color="#65676b" />
          <Text style={{color: 'black'}}>My Vehicle</Text>
          <Icon name="chevron-right" size={30} color="#65676b" />
        </View>
        <View style={style.detailcard}>
          <Icon name="credit-card" size={30} color="#65676b" />
          <Text style={{color: 'black'}}>Payment Method</Text>
          <Icon name="chevron-right" size={30} color="#65676b" />
        </View>
        <View style={style.detailcard}>
          <Icon name="gift" size={30} color="#65676b" />
          <Text style={{color: 'black'}}>My Coupons</Text>
          <Icon name="chevron-right" size={30} color="#65676b" />
        </View>
        <View style={style.detailcard}>
          <Icon name="settings" size={30} color="#65676b" />
          <Text style={{color: 'black'}}>My Setting</Text>
          <Icon name="chevron-right" size={30} color="#65676b" />
        </View>
      </View>
      <TouchableOpacity style={style.signoutcard} onPress={handleLogout}>
        <Text style={style.signouttext}>
          <Icon
            name="log-out"
            size={20}
            color="white"
            style={{marginRight: 20}}
          />{' '}
          Sign out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const style = StyleSheet.create({
  page: {
    marginTop: 50,
  },
  header: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 28,
  },
  profilecard: {
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
    marginLeft: 28,
    marginRight: 28,
    height: 219,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  optioncard: {
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
    marginLeft: 28,
    marginRight: 28,
    height: 239,
    marginTop: 25,
  },
  profileimage: {
    borderRadius: 50,
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  profilename: {
    alignSelf: 'center',
    color: '#333333',
    fontSize: 20,
    marginTop: 12,
  },
  profilemail: {
    alignSelf: 'center',
    color: '#65676b',
    fontSize: 16,
  },
  view: {
    alignSelf: 'center',
    color: '#0068c6',
    fontSize: 14,
    marginTop: 16,
  },
  signoutcard: {
    backgroundColor: '#0068c6',
    borderRadius: 20,
    marginLeft: 28,
    marginRight: 28,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signouttext: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  detailcard: {
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 28,
    marginRight: 28,
    alignItems: 'center',
  },
});

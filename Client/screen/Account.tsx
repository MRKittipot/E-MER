import React from 'react';
import {Text, Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useState, useEffect} from 'react';
import {auth as a} from "../config/Firebaseconfig"
import {signOut} from "firebase/auth"
import { useUserAuth } from '../context/userContext';
import auth from "@react-native-firebase/auth"

const Account = ({navigation}) => {
  const [Firstname, setFirstname] = useState('Manoj');
  const [Lastname, setLastname] = useState('Kajornroj');
  const [Email, setEmail] = useState('Manoj@gmail');
  const [DateofBirth, setDateofBirth] = useState('11 Dec 1995');
  const [Phonenumber, setPhonenumber] = useState('0851825708');

  const {user,provider} = useUserAuth();

  const handleLogout = async () =>{
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
  }

  useEffect(() => {
    console.log(JSON.stringify(user).length);
    if (JSON.stringify(user).length == 2) {
      navigation.navigate('Signin');
    }
  }, [user]);

  return (
    <View style={style.page}>
      <Icon
        name="chevron-left"
        size={30}
        color="#000000"
        style={{marginLeft: 20}}
        onPress={() => navigation.goBack()}
      />
      <Text style={style.header}>My account</Text>
      <Image
        source={require('../assets/google-logo.png')}
        style={style.profileimage}
      />
      <View style={style.optioncard}>
        <View style={style.detailcard}>
          <View style={style.insidecard}>
            <Icon name="user" size={30} color="#65676b" />
            <View style={style.labelpart}>
              <View style={style.labelcard}>
                <Text>Firstname</Text>
              </View>
              <Text style={style.textinf}>{Firstname}</Text>
            </View>
          </View>
          <Icon
            name="chevron-right"
            size={30}
            color="#65676b"
            style={{justifyContent: 'flex-end', display: 'flex'}}
          />
        </View>
        <View style={style.detailcard}>
          <View style={style.insidecard}>
            <Icon name="user" size={30} color="#65676b" />
            <View style={style.labelpart}>
              <View style={style.labelcard}>
                <Text>Lastname</Text>
              </View>
              <Text style={style.textinf}>{Lastname}</Text>
            </View>
          </View>
          <Icon
            name="chevron-right"
            size={30}
            color="#65676b"
            style={{justifyContent: 'flex-end', display: 'flex'}}
          />
        </View>
        <View style={style.detailcard}>
          <View style={style.insidecard}>
            <Icon name="mail" size={30} color="#65676b" />
            <View style={style.labelpart}>
              <View style={style.labelcard}>
                <Text>Mail</Text>
              </View>
              <Text style={style.textinf}>{Email}</Text>
            </View>
          </View>
          <Icon
            name="chevron-right"
            size={30}
            color="#65676b"
            style={{justifyContent: 'flex-end', display: 'flex'}}
          />
        </View>
        <View style={style.detailcard}>
          <View style={style.insidecard}>
            <Icon name="calendar" size={30} color="#65676b" />
            <View style={style.labelpart}>
              <View style={style.labelcard}>
                <Text>Date of Birth</Text>
              </View>
              <Text style={style.textinf}>{DateofBirth}</Text>
            </View>
          </View>
          <Icon
            name="chevron-right"
            size={30}
            color="#65676b"
            style={{justifyContent: 'flex-end', display: 'flex'}}
          />
        </View>
        <View style={style.detailcard}>
          <View style={style.insidecard}>
            <Icon name="phone" size={30} color="#65676b" />
            <View style={style.labelpart}>
              <View style={style.labelcard}>
                <Text>Phone</Text>
              </View>
              <Text style={style.textinf}>{Phonenumber}</Text>
            </View>
          </View>
          <Icon
            name="chevron-right"
            size={30}
            color="#65676b"
            style={{justifyContent: 'flex-end', display: 'flex'}}
          />
        </View>
      </View>
      <TouchableOpacity style={style.signoutcard} onPress={()=>handleLogout()}>
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

export default Account;

const style = StyleSheet.create({
  page: {
    marginTop: 50,
  },
  header: {
    color: '#333333',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 28,
    marginTop: 10,
    marginBottom: 20,
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
  profileimage: {
    borderRadius: 50,
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  optioncard: {
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
    marginLeft: 28,
    marginRight: 28,
    height: 308,
    marginTop: 25,
  },
  detailcard: {
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 28,
    marginRight: 28,
    alignItems: 'center',
  },
  textinf: {
    color: '#0068c6',
    textAlign: 'right',
  },
  insidecard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelpart: {
    marginLeft: 15,
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between',
  },
  labelcard: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});

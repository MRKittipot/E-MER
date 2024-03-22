import {auth} from '../config/Firebaseconfig';
import {ref, push, set} from 'firebase/database';
import React, {useState} from 'react';
import {db} from '../config/Firebaseconfig';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import * as SplashScreen from 'expo-splash-screen';
import axios from 'axios';

import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import Icon from 'react-native-vector-icons/Feather';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordBorderColor, setConfirmPasswordBorderColor] =
    useState('#A2A1A1');
  const [sex, setSex] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);
  const Gender = ['Male', 'Female', 'Other'];
  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatePicker = () => {
    showMode('date');
  };

  const hideDatePicker = () => {
    setShow(false);
  };

  const handleChange = (
    _event: any,
    selectedDate: React.SetStateAction<Date> | undefined,
  ) => {
    if (selectedDate !== undefined) {
      setDateOfBirth(selectedDate);
      setIsFormValid(
        !!selectedDate &&
          !!email &&
          !!password &&
          !!confirmPassword &&
          !!sex &&
          !!dateOfBirth &&
          !!name,
      );
    }
    hideDatePicker();
  };

  const handleSignUp = async () => {
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !sex ||
      !dateOfBirth
    ) {
      console.log('Please fill in all required fields');
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters, including one digit, one lowercase, and one uppercase letter.',
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        'Password and Confirm Password do not match',
        'Please try again',
      );
      setConfirmPasswordBorderColor('red');
      return;
    }

    // Prepare data for the API request

    try {
      // Call your backend API endpoint for user registration
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const userData = {
        email,
        response: response.user.uid,
        name,
        sex,
        dateOfBirth: format(dateOfBirth, 'yyyy-MM-dd'), // Adjust the date format if needed
      };

      if (response.user) {
        const newUserRef = push(ref(db, 'users'));
        set(newUserRef, userData)
          .then(() => {
            console.log('Data pushed to Firebase successfully');
          })
          .catch(error => {
            console.error('Error pushing data to Firebase: ', error);
          });
        console.log('User registered successfully');
        navigation.navigate('LoadingPage');
      } else {
        // Handle errors from the server
        console.error('Registration failed:');
      }
    } catch (error) {
      if (
        error.message.includes('email-already-in-use') ||
        error.message.includes('auth/invalid-email')
      ) {
        Alert.alert(
          'Mail already in used',
          'Please try again with your new mail',
        );
      } else {
        Alert.alert(`message error : ${error.message}`);
      }
    }

    // Reset the form after submission if needed
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSex('');
    setDateOfBirth(new Date());
    setConfirmPasswordBorderColor('gray');
    setIsFormValid(false);
  };

  return (
    <View style={styles.container}>
      <Icon
        name="chevron-left"
        size={30}
        color="#000000"
        onPress={() => navigation.goBack()}
        style={{position: 'relative', left: -10}}
      />
      <Text style={styles.title}>Create Account</Text>
      <Text
        style={{
          marginBottom: 20,
          fontWeight: 'bold',
          fontSize: 12,
          color: '#A0A0A0',
        }}>
        Enter the fields below to target started{' '}
      </Text>
      <View style={styles.inputBox}>
        <Text style={styles.labelTextInput} nativeID="Name">
          Name
        </Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => {
            setName(text);
            setIsFormValid(
              !!text &&
                !!email &&
                !!password &&
                !!confirmPassword &&
                !!sex &&
                !!dateOfBirth &&
                !!name,
            );
          }}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.labelTextInput}>Email</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={text => {
            setEmail(text);
            setIsFormValid(
              !!text &&
                !!email &&
                !!password &&
                !!confirmPassword &&
                !!sex &&
                !!dateOfBirth &&
                !!name,
            );
          }}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.labelTextInput}>Password</Text>
        <TextInput
          style={[
            styles.input,
            {borderColor: passwordError ? 'red' : '#A1A2A2'},
          ]}
          secureTextEntry
          value={password}
          onChangeText={text => {
            setPassword(text);
            setPasswordError('');
            setIsFormValid(
              !!text &&
                !!email &&
                !!password &&
                !!confirmPassword &&
                !!sex &&
                !!dateOfBirth &&
                !!name,
            );
          }}
          onBlur={() => {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (!passwordRegex.test(password)) {
              setPasswordError(
                'Password must be at least 8 characters, including one digit, one lowercase, and one uppercase letter.',
              );
            } else {
              setPasswordError('');
            }
          }}
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.labelTextInput}>Confirm Password</Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: passwordsMatch
                ? '#A1A2A2'
                : confirmPasswordError
                ? 'orange'
                : '#A1A2A2',
            },
          ]}
          secureTextEntry
          value={confirmPassword}
          onChangeText={text => {
            setConfirmPassword(text);
            setPasswordsMatch(false); // Reset the success message when the user is typing
            setConfirmPasswordError('');
          }}
          onBlur={() => {
            if (password !== confirmPassword) {
              setConfirmPasswordError('Passwords do not match.');
              setPasswordsMatch(false);
            } else {
              setConfirmPasswordError('');
              setPasswordsMatch(true);
            }
          }}
        />

        {confirmPasswordError ? (
          <Text style={styles.focusText}>{confirmPasswordError}</Text>
        ) : null}
      </View>

      <View style={styles.Group_dropdown}>
        <View style={styles.sex}>
          <Text style={styles.labelTextInput}>Sex</Text>
          <SelectDropdown
            data={Gender}
            onSelect={(selectedItem, index) => {
              setSex(selectedItem);
              setIsFormValid(
                !!selectedItem &&
                  !!email &&
                  !!password &&
                  !!confirmPassword &&
                  !!sex &&
                  !!dateOfBirth &&
                  !!name,
              );
            }}
            buttonStyle={styles.select_dropdown}
          />
        </View>
        <View style={styles.dateOfBirth}>
          <Text style={styles.labelTextInput}>Date of Birth</Text>
          <TouchableOpacity
            onPress={showDatePicker}
            style={{position: 'relative'}}>
            <TextInput
              style={styles.select_dropdown}
              value={format(dateOfBirth, 'dd/MM/yyyy')}
              editable={false}
            />
          </TouchableOpacity>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dateOfBirth}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleChange}
            />
          )}
        </View>
      </View>
      <View style={{margin: 10}}></View>
      <TouchableOpacity
        onPress={handleSignUp}
        style={[
          styles.submitButton,
          {backgroundColor: isFormValid ? '#57a8e8' : '#0068c6'},
        ]}
        disabled={!isFormValid}>
        <Text style={styles.textButton}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 28,
    marginRight: 28,
  },
  input: {
    height: 50,
    borderColor: '#A1A2A2',
    borderWidth: 1,
    marginBottom: 0,
    paddingLeft: 20,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    elevation: 4,
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#333333',
  },
  submitButton: {
    backgroundColor: '#0068C6',
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 2,
  },
  labelTextInput: {
    fontSize: 14,
    color: '#A0A0A0',
    fontWeight: 'bold',
    marginBottom: 0,
  },
  Group_dropdown: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginTop: 8,
    marginRight: 10,
  },
  select_dropdown: {
    height: 50,
    borderColor: '#A1A2A2',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    width: '90%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  sex: {
    width: '55%',
  },

  dateOfBirth: {
    width: '55%',
  },

  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 8,
    marginTop: 0,
  },
  successText: {
    color: 'green',
    fontSize: 8,
    marginTop: 0,
  },
  inputBox: {
    marginBottom: 18,
  },
  focusText: {
    color: 'orange',
    fontSize: 8,
    marginTop: 0,
  },
});

export default SignUp;

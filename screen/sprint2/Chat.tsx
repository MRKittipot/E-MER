// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import database from '@react-native-firebase/database';
// import { getAuth } from 'firebase/auth';

// function ChatScreen({ route }) {
//   const { roomId } = route.params;
//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState('');
//   const auth = getAuth();

//   useEffect(() => {
//     const chatRef = database().ref(`/chats/${roomId}/messages`);

//     const handleData = (snapshot) => {
//       if (snapshot.val()) {
//         setMessages(snapshot.val());
//       }
//     };

//     chatRef.on('value', handleData);

//     return () => {
//       chatRef.off('value', handleData);
//     };
//   }, [roomId]);

//   const sendMessage = () => {
//     if (messageInput.trim() !== '') {
//       const user = auth.currentUser;
//       const newMessage = {
//         text: messageInput,
//         timestamp: Date.now(),
//         userId: user.uid, // UID ของผู้ใช้
//       };
//       console.log('Sending message:', newMessage);

//       database().ref(`/chats/${roomId}/messages`).push(newMessage);
//       setMessageInput('');
//     }
//   };

//   return (
//     <View>
//       <View style={{ height: 500 }}>
//         {messages.map((message, index) => (
//           <Text key={index}>{message.text}</Text>
//         ))}
//       </View>
//       <View>
//         <TextInput
//           value={messageInput}
//           onChangeText={(text) => setMessageInput(text)}
//           placeholder="Type a message..."
//         />
//         <Button title="Send" onPress={sendMessage} />
//       </View>
//     </View>
//   );
// }

// export default ChatScreen;

// import React, { useState, useEffect } from 'react';
// import { View } from 'react-native';
// import InputMeaasage from '../src/components/InputMessage';
// import ListData from '../src/components/ListData';
// import ChatBar from '../src/components/ChatBar';
// import database from '@react-native-firebase/database';
// import { getAuth } from 'firebase/auth';

// const ChatScreen = () => {
//   const [listMsg, setListMsg] = useState([]);
//   const auth = getAuth();

//   useEffect(() => {
//     const messageRef = database().ref('message/');

//     messageRef.on('value', (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         setListMsg(Object.values(data)); // Extract object values for cleaner data structure
//       }
//     });

//     return () => messageRef.off(); // Cleanup function to remove event listener on unmount
//   }, []);

//   const onClickButtonHandlerData = (msg) => {
//     if (msg !== '') {
//       const newMsg = {
//         timestamp: Date.now(),
//         uid: auth.currentUser.uid,
//         key: Math.random().toString().replace('.', ''),
//         message: msg,
//       };
//       console.log(newMsg);
//       const newListMsg = [...listMsg, newMsg]; // Use spread operator for immutability
//       setListMsg(newListMsg);
//       database().ref('message/').set(newListMsg);
//     }

//   };

//   return (
//     <View style={{ width:'100%', height:'100%'}}>
//       <ChatBar />
//       <ListData listMsg={listMsg} />
//       <InputMeaasage onClickButtonHandler={onClickButtonHandlerData} />
//     </View>
//   );
// };

// export default ChatScreen;
//jaruwit178@gmail.com
//Jaru1234

import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import InputMessage from '../../src/components/Chat/InputMessage';
import ListData from '../../src/components/Chat/ListData';
import ChatBar from '../../src/components/Chat/ChatBar';
import database from '@react-native-firebase/database';
import {getAuth} from 'firebase/auth';
import {useUserAuth} from '../../context/userContext';
const ChatScreen = () => {
  const [listMsg, setListMsg] = useState([]);
  const auth = getAuth();
  const {user, provider} = useUserAuth();
  useEffect(() => {
    const messageRef = database().ref(`messages/${user.uid}`);

    messageRef.on('value', snapshot => {
      const data = snapshot.val();
      if (data) {
        setListMsg(Object.values(data));
      }
    });

    return () => messageRef.off(); // Cleanup function to remove event listener on unmount
  }, [user.uid]);

  const onClickButtonHandlerData = msg => {
    if (msg.trim() !== '') {
      const newMsg = {
        timestamp: Date.now(),
        uid: user.uid,
        key: database().ref(`messages/${auth.currentUser.uid}`).push().key,
        message: msg,
      };

      console.log('\n New Message:', newMsg, '\n');
      const newListMsg = [...listMsg, newMsg]; // Use spread operator for immutability
      setListMsg(newListMsg);
      database().ref(`messages/${user.uid}/${newMsg.key}`).set(newMsg);
    }
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
      <ChatBar />
      <ListData listMsg={listMsg} />
      <InputMessage onClickButtonHandler={onClickButtonHandlerData} />
    </View>
  );
};

export default ChatScreen;
// "QFjsQs17cPVU2RTWAJfdoTdk3rv2"
// "78VsTbKMDYfwjtMHi3hL22X9Uzg2"

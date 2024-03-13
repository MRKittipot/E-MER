import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InputMessage = (props) => {
  const [msg, setMsg] = useState("");

  const handleTextChange = (text) => {
    setMsg(text);
  };

  const handleButtonClick = () => {
    props.onClickButtonHandler(msg);
    setMsg('');
  };

  return (
    <View style={{ marginTop: 'auto' , backgroundColor:'#ffffff'}}>
      <View style={{ flexDirection: 'row', padding: 10, borderWidth: 0.5, borderColor: '#D9D9D9' }}>
  
        <TextInput
          style={{ flex: 1, padding: 10, backgroundColor: '#D9D9D9', borderRadius: 30, borderColor: 'black', marginRight: 10 }}
          onChangeText={handleTextChange}
          value={msg}
          placeholder="Type your message here..."
        />
        <Icon name="send" size={30} color="#939292" onPress={handleButtonClick} />
      </View>
    </View>
  );
};

export default InputMessage;
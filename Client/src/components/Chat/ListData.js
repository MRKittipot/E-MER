import React from 'react';
import { View, Text, FlatList } from 'react-native';

const ListData = (props) => {
  console.log('ListData Props:', props);
  return (
    <View style={{height:'100%'}}>
      <FlatList
        data={props.listMsg}
        renderItem={({ item }) => <Text key={item.key} style={{backgroundColor:'#d9d9d9', margin:10, padding:10,  textAlign:'center', borderRadius:10}}>{item.message}</Text>}
        style={{padding: 10, marginLeft: 'auto'}}
      />
    </View>
  );
};

export default ListData;
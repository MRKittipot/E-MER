import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ChatBar = () => {
    return (
        <View style={styles.bar}>
             <TouchableOpacity onPress={() => handleBackPress()} style={{marginRight:'auto'}}>
                <MaterialIcons name="chevron-left" size={24} color="#ffffff" />
            </TouchableOpacity>
            <Image
                style={styles.profileImage}
                source={{
                    uri: 'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528'
                }}
            />
            <View style={styles.text}>
                <Text style={styles.username}>ณัฐพล พงศ์เก่า</Text>
                <Text style={{marginLeft: 10, fontSize:12, color:'#ffffff'}}>Van EVM-2023</Text>
            </View>
            <TouchableOpacity onPress={() => handleCallPress()} style={{marginLeft: 'auto',}}>
                <MaterialIcons name="call" size={24} color="#ffffff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#0068C6',
        marginTop: 40,
        width: '100%',

    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ffffff',
    },
    username: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    onlineIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#00ff00',
        marginLeft: 5,
    },
    menuButton: {
        marginLeft: 'auto',
    },
    menuButtonText: {
        fontSize: 20,
    },
    text: {
        display: 'grid',
        justifyItems: 'stretch',
        alignItems: 'stretch',
    },

});

export default ChatBar;
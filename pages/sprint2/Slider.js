import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'; // นำเข้า Dimensions
import React, { useState, useEffect } from 'react';
import PlayList from './PlayList';
import NewsEVM from './NewsEVM';
import axios from 'axios'
const Slider = () => {

    const [data, setData] = useState([])
    const [sliderList, setSliderList] = useState([]);


    const fetchBlog = async() => {
        const response = await axios.get('http://10.0.2.2:4000/posts')
        const filteredData = data.filter((item) => item.type === "main");
        setSliderList(filteredData);
        setData(response.data.data);
    }
    useEffect(() => {

        fetchBlog();
    }, [data])

    return (
        <View>
            <FlatList
                data={sliderList}
                horizontal = {true}
                renderItem={({ item,index }) => (
                    // <TouchableOpacity onPress={() => {
                    //     if(item.name === '') {
                    //         navigation.navigation(''); //นำไปยังหน้าที่ต้องการ
                    //     }
                    // }}>
                    <View>
                        <Image source={{ uri: item.urlpic }} style={style.SliderImage} />
                        <Text style = {style.nameText}>{item.title}</Text>
                    </View>
                )}
            />
            <NewsEVM data={data}/>
            <PlayList data={data}/>
        </View>
    )
}

const style = StyleSheet.create({
    SliderImage : {
        width : Dimensions.get('screen').width*0.88,
        height : 170,
        marginLeft : 15,
        marginTop : 12,
        borderRadius : 10,
        marginRight : 15        
    },
    nameText : {
        fontSize : 14,
        padding : 5,
        width: 350,
        fontWeight : '600',
        color : '#65676B',
        marginLeft : 15
      }
});

export default Slider;
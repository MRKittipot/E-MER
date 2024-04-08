import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'; // นำเข้า Dimensions
import React, { useState, useEffect } from 'react';
import PlayList from './PlayList';
import NewsEVM from './NewsEVM';

const Slider = () => {
    const [sliderList, setSliderList] = useState([]);

    useEffect(() => {
        setSliderList([
            {
                id : 1,
                name : 'MGC-ASIA จับมือ ปตท.สยายปีก รุกธุรกิจรถยนต์ไฟฟ้าชูไทยศูนย์กลางการผลิต',
                imageUrl : 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LTeZ6oAJmQ9fjoZaVrjJOKhgyLnZQc5jAXqomepLvDEXlT65LQ.jpg'
            },
            {
                id : 2,
                name : 'IONIQ 5 N ผ่านเข้ารอบสามอันดับสุดท้ายรถยนต์ยอดเยี่ยม 2024 World Car Awards',
                imageUrl : 'https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKGsoB0uoilbeE0wqIbQ5TsvTckOf769VmCPV20vIKjAoufVEr0Ju.webp'
            }
        ])
    }, [])

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
                        <Image source={{ uri: item.imageUrl }} style={style.SliderImage} />
                        <Text style = {style.nameText}>{item.name}</Text>
                    </View>
                )}
            />
            <NewsEVM/>
            <PlayList/>
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
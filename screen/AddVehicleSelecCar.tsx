import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const AddVehicleSelecCar = () => {
    return (
        <View>
            <View>
                <Text style={styles.AddVehicleHead}>Add vehicle</Text>
                <Text style={styles.AddVehicleLittle}>Enter the fields below to get started</Text>
            </View>

            <Image style={styles.ImgShow} source={require("../images/battery.png")} />
            <View style={styles.AddVehicleDetail}>
                <Image style={{ width: 30, height: 30 }} source={require("../images/battery.png")} />
                <Text style={styles.FontShow}>LOTUS ELETRE</Text>
            </View>
            <View style={styles.ShowDetail}>
                <Text style={styles.FontShow}>ปี : {2020}</Text>
                <Text style={styles.FontShow}>คำอธิบาย : {"มีท่อนต่างๆ ของ Lorem Ipsum ให้หยิบมาใช้งานได้มากมาย แต่ส่วนใหญ่แล้วจะถูกนำไปปรับให้เป็นรูปแบบอื่นๆ อาจจะด้วยการสอดแทรกมุกตลก หรือด้วยคำที่มั่วขึ้นมาซึ่งถึงอย่างไรก็ไม่มีทางเป็นเรื่องจริงได้เลยแม้แต่น้อย"}</Text>
            </View>

            {/* componente หัวชาร์จให้เลือก มาใส่ต่อจากนี้ */}


        </View>
    )
}

export default AddVehicleSelecCar

const styles = StyleSheet.create({
    AddVehicleHead: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginLeft: "7%",
    },
    AddVehicleLittle: {
        marginLeft: "7%",
        marginBottom: "7%",
    },
    ImgShow: {
        alignSelf: "center",
        marginBottom: "7%",
        width: 200,
        height: 200
    },
    AddVehicleDetail: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "7%"
    },
    ShowDetail: {
        marginLeft: "7%"
    },
    FontShow: {
        fontSize: 20,
        fontWeight: "bold",
    }
})
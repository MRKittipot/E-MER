import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AddVehicle = () => {
    const [selectedRectangle, setSelectedRectangle] = useState(null);
    const navigation = useNavigation();

    const handleRectanglePress = (rectangle) => {
        setSelectedRectangle(rectangle);
    };

    const handleNextPress = () => {
        console.log("Next button pressed");
        // ทำสิ่งที่คุณต้องการเมื่อปุ่ม Next ถูกกด
        // เพิ่มโค้ดเพื่อนำไปยังหน้าถัดไปหรือทำงานอื่น ๆ ตามต้องการ
    };

    return (
        <ScrollView>
            <View>
                <View>
                    <Text style={styles.AddVehicleHead}>Add vehicle</Text>
                    <Text style={styles.AddVehicleLittle}>Enter the fields below to get started</Text>
                </View>

                <Text style={styles.AddVehicleToppic}>Brand</Text>
                <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Image style={styles.circleImage} source={require("../assets/logo-tesla.png")} />
                        </View>
                        <Text style={styles.brandText}>TESLA</Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Image style={styles.circleImage2} source={require("../assets/logo-porsche.png")} />
                        </View>
                        <Text style={styles.brandText}>PORSCHE</Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Image style={styles.circleImage3} source={require("../assets/logo-bmw.png")} />
                        </View>
                        <Text style={styles.brandText}>BMW</Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Image style={styles.circleImage2} source={require("../assets/logo-audi.png")} />
                        </View>
                        <Text style={styles.brandText}>AUDI</Text>
                    </View>
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Image style={styles.circleImage2} source={require("../assets/logo-BYD.png")} />
                        </View>
                        <Text style={styles.brandText}>BYD</Text>
                    </View>
                </ScrollView>

                <Text style={styles.AddVehicleToppic}>All Cars</Text>
                <TouchableOpacity 
                    style={[styles.nextButton, selectedRectangle ? {} : styles.disabledButton]} 
                    onPress={() => navigation.goBack()}
                    disabled={!selectedRectangle}
                >
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>

                <View style={styles.rectangleContainer}>
                    <View style={styles.rectanglePair}>
                        <TouchableOpacity
                            onPress={() => handleRectanglePress("Porsche Taycan")}
                            style={[styles.rectangle, selectedRectangle === "Porsche Taycan" && styles.selectedRectangle]}
                        >
                            <Image style={[styles.rectangleImage, selectedRectangle === "Porsche Taycan" && styles.selectedImage]} source={require("../assets/Taycan.jpg")} />
                            <View style={styles.textContainer}>
                                <Text style={styles.rectangleText}>Porsche Taycan</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleRectanglePress("Porsche Macan")}
                            style={[styles.rectangle2, selectedRectangle === "Porsche Macan" && styles.selectedRectangle]}
                        >
                            <Image style={[styles.rectangleImageMacan, selectedRectangle === "Porsche Macan" && styles.selectedImage]} source={require("../assets/macan.webp")} />
                            <View style={styles.textContainer}>
                                <Text style={styles.rectangleText}>Porsche Macan</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rectanglePair}>
                        <TouchableOpacity
                            onPress={() => handleRectanglePress("Tesla Model 3")}
                            style={[styles.rectangle, selectedRectangle === "Tesla Model 3" && styles.selectedRectangle]}
                        >
                            <Image style={[styles.rectangleImage1, selectedRectangle === "Tesla Model 3" && styles.selectedImage]} source={require("../assets/tesla.jpg")} />
                            <View style={styles.textContainer}>
                                <Text style={styles.rectangleText}>Tesla Model 3</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleRectanglePress("Tesla Model Y")}
                            style={[styles.rectangle2, selectedRectangle === "Tesla Model Y" && styles.selectedRectangle]}
                        >
                            <Image style={[styles.rectangleImage1, selectedRectangle === "Tesla Model Y" && styles.selectedImage]} source={require("../assets/modelY.jpg")} />
                            <View style={styles.textContainer}>
                                <Text style={styles.rectangleText}>Tesla Model Y</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rectanglePair}>
                        <TouchableOpacity
                            onPress={() => handleRectanglePress("BYD Seal")}
                            style={[styles.rectangle, selectedRectangle === "BYD Seal" && styles.selectedRectangle]}
                        >
                            <Image style={[styles.rectangleImage, selectedRectangle === "BYD Seal" && styles.selectedImage]} source={require("../assets/bydseal.png")} />
                            <View style={styles.textContainer}>
                                <Text style={styles.rectangleText}>BYD Seal</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleRectanglePress("BYD Dolphin")}
                            style={[styles.rectangle2, selectedRectangle === "BYD Dolphin" && styles.selectedRectangle]}
                        >
                            <Image style={[styles.rectangleImage2, selectedRectangle === "BYD Dolphin" && styles.selectedImage]} source={require("../assets/byddolphin3.png")} />
                            <View style={styles.textContainer}>
                                <Text style={styles.rectangleText}>BYD Dolphin</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rectanglePair}>
                        <TouchableOpacity
                            onPress={() => handleRectanglePress("BMW iX")}
                            style={[styles.rectangle, selectedRectangle === "BMW iX" && styles.selectedRectangle]}
                        >
                            <Image style={[styles.rectangleImage, selectedRectangle === "BMW iX" && styles.selectedImage]} source={require("../assets/ix.webp")} />
                            <View style={styles.textContainer}>
                                <Text style={styles.rectangleText}>BMW iX</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleRectanglePress("Audi e-tron")}
                            style={[styles.rectangle2, selectedRectangle === "Audi e-tron" && styles.selectedRectangle]}
                        >
                            <Image style={[styles.rectangleImage3, selectedRectangle === "Audi e-tron" && styles.selectedImage]} source={require("../assets/etron.webp")} />
                            <View style={styles.textContainer}>
                                <Text style={styles.rectangleText}>Audi e-tron</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                
                
            </View>
        </ScrollView>
    )
}

export default AddVehicle;

const styles = StyleSheet.create({
    AddVehicleHead: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginLeft: "7%",
    },
    AddVehicleLittle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#A0A0A0',
        marginTop: 5,
        marginLeft: 27,
        marginBottom: 20
    },
    AddVehicleToppic: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: "7%"
    },
    ShowIcon: {
        flexDirection: "row",
        marginHorizontal: "7%",
        marginVertical: "7%",
    },
    scrollViewContent: {
        alignItems: 'flex-start',
        paddingLeft: "7%",
        marginTop: 20, 
    },
    circleContainer: {
        alignItems: 'center',
        marginRight: 20,
    },
    circle: {
        width: 90,
        height: 90,
        borderRadius: 80,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleImage: {
        width: 55, 
        height: 55, 
        resizeMode: 'contain'
    },
    circleImage2: {
        width: 70, 
        height: 70,
        marginTop: 5, 
        resizeMode: 'contain'
    },
    circleImage3: {
        width: 70, 
        height: 70, 
        resizeMode: 'contain',
        marginBottom: 5
    },
    brandText: {
        textAlign: 'center',
        marginTop: 10, 
        marginBottom: 30, 
        fontSize: 14,
        fontWeight: 'bold' 
    },
    rectangleContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 10,
        marginBottom: 70
    },
    rectanglePair: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    rectangle: {
        width: 165,
        height: 165,
        backgroundColor: '#FFFFFF', 
        marginHorizontal: 5,
        marginLeft: 25,
        marginTop: 20,
        borderRadius: 20,
        position: 'relative'
    },
    rectangle2: {
        width: 165,
        height: 165,
        backgroundColor: '#FFFFFF', 
        marginHorizontal: 5,
        marginLeft: 15,
        marginTop: 20,
        borderRadius: 20,
        position: 'relative'
    },
    rectangleImage: {
        width: 160,
        height: 165,
        resizeMode: 'contain',
    },
    rectangleImageMacan: {
        width: 158,
        height: 165,
        resizeMode: 'contain',
    },
    rectangleImage1: {
        width: 155,
        height: 160,
        resizeMode: 'contain',
        marginTop: 10,
        marginLeft: 3,
        transform: [{ rotateY: '180deg' }],
        // useNativeDriver: true
    },
    rectangleImage2: {
        width: 155,
        height: 160,
        resizeMode: 'contain',
        marginTop: 15,
        marginLeft: 3
    },
    rectangleImage3: {
        width: 170,
        height: 170,
        resizeMode: 'contain',
        marginTop: 6,
        transform: [{ rotateY: '180deg' }],
        // useNativeDriver: true
    },
    textContainer: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 5,
        borderRadius: 5,
    },
    rectangleText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    selectedRectangle: {
        borderWidth: 3,
        borderColor: 'blue',
    },
    selectedImage: {
        opacity: 0.5,
    },
    nextButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 25, // ปรับตำแหน่งและขนาดตามต้องการ
        marginTop: 20,
    },
    nextButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    disabledButton: {
        backgroundColor: '#A0A0A0',
    },
});
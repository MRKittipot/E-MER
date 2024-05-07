import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Timestamp from "../src/components/Status/Timestamp";
import Energy from "../src/components/Status/Energy";
import Cost_to_pay from "../src/components/Status/Cost_to_pay";
import { useNavigation } from '@react-navigation/native';

const Status = () => {
    const [usageTime, setUsageTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [canPay, setCanPay] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        let interval;
        if (isTimerRunning) {
            interval = setInterval(() => {
                setUsageTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isTimerRunning]);

    const handleStartStopTimer = () => {
        setIsTimerRunning((prev) => !prev);
    };

    const handlePay = () => {
        // กระบวนการชำระเงิน
        // เช่น ส่งข้อมูลไปยังเซิร์ฟเวอร์เพื่อการชำระเงิน
        // หลังจากนั้นคุณสามารถเซ็ตต่า state หรือทำอย่างอื่นต่อไปได้ตามต้องการ
    };

    const seconds = usageTime % 60;
    const minutes = Math.floor((usageTime / 60) % 60);
    const hours = Math.floor(usageTime / 3600);

    const pad2 = (number) => {
        return number < 10 ? `0${number}` : number.toString();
    };

    useEffect(() => {
        if (hours > 0 || minutes > 0 || seconds > 0) {
            setCanPay(true);
        } else {
            setCanPay(false);
        }
    }, [hours, minutes, seconds]);

    return (
        <View>
            <Text style={styles.Head}>Status</Text>
            <View style={styles.status}>
                <Text style={styles.time}>{pad2(hours)} : {pad2(minutes)} : {pad2(seconds)} hr.</Text>
                <Timestamp />
                <View style={styles.energy_and_cost_card}>
                    <Energy />
                    <Cost_to_pay />
                </View>
                <TouchableOpacity 
                    style={[styles.circularButton, isTimerRunning ? styles.startButton : styles.stopButton]} 
                    onPress={handleStartStopTimer}
                >
                    <Text style={styles.buttonText}>{isTimerRunning ? 'Stop charging' : 'Start charging'}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.rectangularButton, canPay ? styles.payButton : styles.disabledButton]} 
                    onPress={() => navigation.navigate('Summaryorder')}
                    disabled={!canPay}
                >
                    <Text style={styles.buttonText}>Make Payment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Head: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginLeft: "7%",
        marginBottom: "7%"
    },
    status: {
        marginHorizontal: "7%"
    },
    time: {
        color: "#0068C6",
        fontWeight: "bold",
        fontSize: 45,
        alignSelf: "center",
        marginBottom: "7%"
    },
    energy_and_cost_card: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    circularButton: {
        width: 150,
        height: 150,
        borderRadius: 75, // ให้มีรูปร่างวงกลมโดยใช้ความกว้างของเส้นรอบวง (diameter) คือ 150 และหารด้วย 2
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center',
    },
    rectangularButton: {
        width: 150,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center',
    },
    startButton: {
        backgroundColor: '#f44336',
    },
    stopButton: {
        backgroundColor: '#4CAF50',
    },
    payButton: {
        backgroundColor: '#0068C6',
    },
    disabledButton: {
        backgroundColor: '#808080',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Status;

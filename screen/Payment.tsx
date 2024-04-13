import { StyleSheet, Text, View, Button, Modal, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Wallet from '../src/components/Payment/Wallet'
import Card from '../src/components/Payment/Card'
import NetBanking from '../src/components/Payment/NetBanking'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Payment = () => {
    const [show, setShow] = useState(false)
    return (
        <View>
            <View>
                <Text style={styles.HeadPayment}>Payment</Text>
            </View>

            <View style={styles.LayerPayment}>
                <Text style={styles.HeadDetail}>Wallet</Text>
                <Wallet />
            </View>

            <View style={styles.LayerPayment}>
                <Text style={styles.HeadDetail}>Save payment methods</Text>
                <View style={{ width: 260, height: 130, borderColor: "red", borderWidth: 1, alignSelf: "center" }}></View>
            </View>

            <View style={styles.LayerPayment}>
                <Text style={styles.HeadDetail}>Other Payment Methods</Text>
                <Card />
                <NetBanking />
            </View>


            <View>


                {/* button for test */}
                <Button
                    title="PAYMENT"
                    onPress={() => setShow(true)}
                    color="#841584"
                />


                {/* pop up */}
                <Modal transparent={true} visible={show}>
                    <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
                        <View style={{ backgroundColor: "#ffffff", margin: 50, marginTop: "70%", borderRadius: 11 }}>
                            <View style={{ backgroundColor: "#0068C6", borderTopLeftRadius: 11, borderTopRightRadius: 11, alignItems: "center" }}>
                                <Icon name="cash-check" size={70} color="#FFFFFF" />
                            </View>
                            <Text style={{ fontSize: 20, textAlign: "center", marginVertical: "7%" }}>Are you confirm pay?</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginBottom: "7%" }}>
                                <TouchableOpacity style={styles.ButtonPaymentCancle} onPress={() => setShow(false)}>
                                    <Text style={{ textAlign: "center", color: "#6F6A6A" }}>Cancle</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.ButtonPayment} onPress={() => setShow(false)}>
                                    <Text style={{ textAlign: "center", color: "#FFFFFF" }}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                
            </View>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    HeadPayment: {
        color: "#0068c6",
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 50,
    },
    LayerPayment: {
        marginHorizontal: "7%",
    },
    HeadDetail: {
        color: '#000000',
        fontSize: 20,
        marginVertical: "7%"
    },
    ButtonPaymentCancle: {
        backgroundColor: "#D9D9D9",
        padding: 5,
        width: 80,
        borderRadius: 100/2,
    },
    ButtonPayment: {
        backgroundColor: "#0068C6",
        padding: 5,
        width: 80,
        borderRadius: 100/2,
    }
})
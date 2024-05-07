import { View, Text, StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useUserAuth} from '../../../context/userContext';
const PaymentHistory = () => {
  const [Bill,setBill] = useState([]);
  const [fetch,setfetch] = useState(false);
  const {userData} = useUserAuth();
  const getDataintocard = async () =>{
    try{
      const info = {
        uid: userData._id,
      }
      const IDcard = await axios.post("http://10.0.2.2:5000/api/reservation/getbill",info);
      if (IDcard.data.length > 0){
        setBill(IDcard.data)
      }
    }catch(error){
      console.log("Error from PaymentHistoryPage :",error);
    }
  }

  useEffect(() => {
    if (!fetch) { 
      const fetchData = async () => {
        await getDataintocard();
        setfetch(true);
      };
      fetchData();
    }
  }, [fetch]);
  
  useEffect(()=>{
    console.log("======================================================================");
    console.log(Bill[0]);
  },[Bill])

  return (
    Bill.map((Bill) => {
      const Bill_createdAt = new Date(Bill.createdAt);
      const formattedDate = Bill_createdAt.toISOString().substring(0, 10);
      const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      const monthAbbreviation = monthNames[Bill_createdAt.getMonth()];
      return (
        <View style={styles.elevation} key={Bill._id}>
          <View style={styles.Payment}>
            <View style={styles.DateCardPayment}>
              <Text style={styles.DatePayment}>{Bill_createdAt.getDate()}</Text>
              <Text style={styles.DatePayment}>{monthAbbreviation}</Text>
            </View>
            <View style={styles.CardPayment}>
              <View style={styles.NamePay}>
                <Text style={styles.DetailPayment}>Name: </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: "black" }}>{Bill.userName}</Text>
              </View>
              <Text style={styles.DetailPayment}>Date: {formattedDate}</Text>
              <View style={styles.ValuePay}>
                <Text style={styles.DetailPayment}>Battery: {30 + "%"}</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#0068C6" }}>Price {500} Bath</Text>
              </View>
            </View>
          </View>
        </View >
      )
    })
  )
  
}

export default PaymentHistory

const styles = StyleSheet.create({
  ValuePay: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  NamePay: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  DatePayment: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
  },
  DetailPayment: {
    fontSize: 16,
    color: "black"
  },
  DateCardPayment: {
    backgroundColor: '#0068C6',
    height: "100%",
    width: "20%",
    borderTopLeftRadius: 11,
    borderBottomLeftRadius: 11,
    justifyContent: 'center',
  },
  CardPayment: {
    height: "100%",
    width: "70%",
    justifyContent: 'space-evenly',
    marginLeft: "5%",
    marginRight: "5%",
  },
  Payment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: "7%",

    height: 100,
    borderWidth: 1,
    borderColor: "#A2A1A1",
    borderRadius: 11,
    elevation: 4,
  },
})
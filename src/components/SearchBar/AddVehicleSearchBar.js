import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const AddVehicleSearchBar = () => {

  // mock up
  // const car = [
  //   {
  //     car_name: "1",
  //     file_name: "",
  //   },
  //   {
  //     car_name: "2",
  //     file_name: "",
  //   },
  //   {
  //     car_name: "3",
  //     file_name: "",
  //   }
  // ];
  

  const [searchVehicle, setSearchVehicle] = useState('')
  console.log(searchVehicle)

  const ShowNameVehicleSearch = () => {
    console.log("OK")
  }



  return (
    <View>
      <TextInput
        onFocus={ShowNameVehicleSearch}
        onChangeText={(text) => setSearchVehicle(text)}
        style={styles.AddVehicleSearchBar}
        placeholder='Try searching “Tesla”'
      />
    </View>
  )
}

export default AddVehicleSearchBar

const styles = StyleSheet.create({
  AddVehicleSearchBar: {
    backgroundColor: "white",
    marginHorizontal: "7%",
    borderRadius: 11,
    marginBottom: "7%",
    paddingLeft: 10
  }
})






// const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   const data = [
//     {
//       name: "รถไฟฟ้า BTS สายสีเขียว",
//     },
//     {
//       name: "รถไฟฟ้า BTS สายสีทอง",
//     },
//     {
//       name: "รถไฟฟ้า MRT สายสีน้ำเงิน",
//     },
//   ];

//   useEffect(() => {
//     const filtered = data.filter((item) => item.name.includes(searchQuery));
//     filtered.sort((a, b) => {
//       const aDistance = levenshteinDistance(a.name, searchQuery);
//       const bDistance = levenshteinDistance(b.name, searchQuery);
//       return aDistance - bDistance;
//     });
//     setFilteredData(filtered);
//   }, [searchQuery]);

//   return (
//     <View style={styles.container}>
//       <SearchBar
//         placeholder="ค้นหา..."
//         onChangeText={setSearchQuery}
//         value={searchQuery}
//       />
//       <FlatList
//         data={filteredData}
//         renderItem={({ item }) => <Text>{item.name}</Text>}
//       />
//     </View>
//   );
// };

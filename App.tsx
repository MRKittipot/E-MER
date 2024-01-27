import React from "react";
import{View , StyleSheet} from "react-native";
import SignUp from "./src/components/page/SignUpFrom"

const App = () => {
  return(
    <View style={styles.container}>
      <SignUp/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
    margin:10,
  },
});
export default App;
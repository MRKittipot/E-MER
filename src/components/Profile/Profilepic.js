import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FileSystem
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';


const ProfilePicture = () => {
  const [imageSource, setImageSource] = useState(require('./../../../assets/google-logo.png'));
  const [imageSelected, setImageSelected] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const selectImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options,async response => {
      if(response.didCancel){
        console.log("User cancle Image Picker");
      }else if(response.error){
        console.log("Image Picker Error :",response.error)
      }else if(response.assets[0].uri){
        console.log(response.assets[0].uri);
        const select_uri = {uri:response.assets[0].uri}
        setImageSource(select_uri)
        setIsHidden(true);
      }

  });
      }
  const saveimage = async() => {
    
  }
  return (
    <View>
    <TouchableOpacity onPress={selectImage}>
      <View style={styles.imgContainer}>
        {imageSelected ? (
          <Image source={{ uri: imageSource.uri }} style={styles.profileImg} />
        ) : (
          <Image source={imageSource} style={styles.profileImg} />
        )}
        <View style={styles.iconContainer}>
          <Icon name="plus-circle" size={18} color="#0068c6" />
        </View>
      </View>
      
    </TouchableOpacity>
    {isHidden ? (
        <View style={styles.center}>
          <TouchableOpacity style={styles.confirmbtn} onPress={saveimage}>
            <Text style={styles.confirmbtntext}>Sign out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 145,
  },
  imgContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  profileImg: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  center:  {
    width:"100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  confirmbtn:{
    width: "50%",
    backgroundColor: '#0068c6',
    paddingLeft: "20px",
    paddingRight: "20px",
    padding: "10px",
    textAlign: 'center',
    borderRadius: 10,
  },
  confirmbtntext:{
    color: "#fff",
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
  }
});

export default ProfilePicture;

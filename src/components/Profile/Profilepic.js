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
      }

  });
      }

  return (
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
});

export default ProfilePicture;

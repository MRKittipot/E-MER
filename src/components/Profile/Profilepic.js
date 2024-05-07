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
import {useUserAuth} from '../../../context/userContext';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';
import { auth, db, storage, ref, uploadBytes, getDownloadURL } from '../../../config/Firebaseconfig';
import axios from 'axios';
const ProfilePicture = () => {
  const [imageSource, setImageSource] = useState(require('./../../../assets/google-logo.png'));
  const [imageSelected, setImageSelected] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [imgName, setImgName] = useState("");

  const {userData} = useUserAuth();
  const selectImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User canceled Image Picker");
      } else if (response.errorCode) {
        console.log("Image Picker Error:", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];

        if (asset.uri) {
          setImageSource({ uri: asset.uri });

          if (asset.fileName) {
            setImgName(asset.fileName)
            console.log("Image Name:", asset.fileName); // Print image name
          } else {
            console.log("Image name not available");
          }

          setIsHidden(true);
        }
      }
    });
  };
  const saveimage = async () => {
    if (!imageSource || !imageSource.uri) {
      console.error("No image source to upload");
      return;
    }

    const response = await fetch(imageSource.uri);
    const blob = await response.blob();

    const timestamp = Date.now();
    const fileNameWithTimestamp = `${imgName}-${timestamp}`;
    const storageRef = ref(storage, `ticket_images/${fileNameWithTimestamp}`);

    try {
      await uploadBytes(storageRef, blob);
      const downloadURL = await getDownloadURL(storageRef);
      console.log("Image uploaded to:", downloadURL);
      const info = {
        picurl:downloadURL,
        userId:userData._id
      }
      const respone = await axios.post('http://10.0.2.2:5000/api/user/updateUserImg', info)
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  
  return (
    <View>
    <TouchableOpacity onPress={selectImage}>
      <View style={styles.imgContainer}>
        {imageSelected ? (
          <Image source={{ uri: imageSource.uri }} style={styles.profileImg} />
        ) : (
          <Image source={{uri: userData.picurl ? userData.picurl : imageSource.uri}} style={styles.profileImg} />
        )}
        <View style={styles.iconContainer}>
          <Icon name="plus-circle" size={18} color="#0068c6" />
        </View>
      </View>
      
    </TouchableOpacity>
    {isHidden ? (
        <View style={styles.center}>
          <TouchableOpacity style={styles.confirmbtn} onPress={saveimage}>
            <Text style={styles.confirmbtntext}>Upload</Text>
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
    width: "30%",
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

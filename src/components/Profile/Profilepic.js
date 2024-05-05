import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FileSystem,
} from 'react-native';
import * as Imagepicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';

const Profilepicture = () => {
  const [imageSource, setImageSource] = useState(
    Image.resolveAssetSource(require('./../../../assets/google-logo.png')),
  );
  const [imageSelected, setImageSelected] = useState(false);

  const selectImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    Imagepicker.launchImageLibrary(options,async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.uri) {
        const source = {uri: response.uri};
        try {
          const {uri: copiedUri} = await FileSystem.copyAsync({
            from: response.uri,
            to: `${FileSystem.DIRECTORY_PICTURES}/profile_image.jpg`, // Adjust path and filename as needed
          });

          Imagepicker.getSize(copiedUri, () => {
            const aspectRatio = 90 / 90;
            const targetWidth = 90;
            const targetHeight = targetWidth / aspectRatio;
            const resizedImageSource = {
              uri: copiedUri,
              width: targetWidth,
              height: targetHeight,
            };
            setImageSource(resizedImageSource);
            setImageSelected(true);
          });
        } catch (error) {
          console.error('Error copying image:', error);
          Alert.alert('Error', 'Failed to copy image. Please try again.');
        }
      }
    });
  };

  return (
    <TouchableOpacity onPress={selectImage}>
      <View style={style.img_container}>
        {imageSelected ? (
          <Image source={{uri: imageSource}} style={style.profile_img} />
        ) : (
          <Image source={imageSource} style={style.profile_img} />
        )}
        <View style={style.icon_container}>
          <Icon name="plus-circle" size={18} color="#0068c6" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  icon_container: {
    position: 'absolute',
    bottom: 10,
    right: 145,
  },
  img_container: {
    position: 'relative',
    alignItems: 'center',
  },
  profile_img: {
    width: 90,
    height: 90,
  },
});

export default Profilepicture;

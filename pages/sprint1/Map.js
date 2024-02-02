import {useState} from 'react';
import MapView from 'react-native-maps';



const Map = () => {
  const [Region, setRegion] = useState();
  return (
    <MapView
      style={{flex: 1}}
      initialRegion={{
        latitude: 37.7825,
        longitude: -122.432,
        latitudeDelta: 0.9,
        longitudeDelta: 0.9,
      }}
    />
  );
};

export default Map;

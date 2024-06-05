import { View, Image } from "react-native"
import { Marker } from 'react-native-maps';

const MapMarker = ({markerDescription, markerTitle, markerUrl, markerLatitude, markerWidth, markerHeight, markerLongitude, circleDescription, circleTitle, circleLatitude, circleLongitude, circleWidth, circleHeight, circleUrl}) => {
  <View>
    <Marker
      coordinate={{ latitude: {markerLatitude}, longitude: {markerLongitude} }}
      title={markerTitle}
      description={markerDescription}
    >
      <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/4207/4207682.png'}} style={{ width: {markerWidth}, height: {markerHeight} }} />
    </Marker>
    <Marker
      coordinate={{ latitude: {circleLatitude}, longitude: {circleLongitude} }}
      title={circleTitle}
      description={circleDescription}
     >
      <Image source={{uri: `${circleUrl}`}} style={{ width: {circleWidth}, height: {circleHeight} }} />
    </Marker>
  </View>
}

export default MapMarker;
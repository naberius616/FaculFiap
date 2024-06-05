import { View, Image } from "react-native"
import { Marker } from 'react-native-maps';

const MapMarker = ({markerDescription, markerTitle, markerLatitude, markerWidth, markerHeight, markerLongitude, circleWidth, circleHeight, markerUrl}) => {
  return(
    <View>
      <Marker
        coordinate={{ latitude: markerLatitude, longitude: markerLongitude }}
        title={markerTitle}
        description={markerDescription}
      >
        <Image source={{uri: markerUrl}} style={{ width: markerWidth, height: markerHeight }} />
      </Marker>
      <Marker
        coordinate={{ latitude: markerLatitude, longitude: markerLongitude }}
        title={markerTitle}
        description={markerDescription}
      >
        <Image source={{uri: 'https://greenpng.com/wp-content/uploads/2020/07/20200728_132928.png'}} style={{ width: circleWidth, height: circleHeight }} />
      </Marker>
    </View>
  )
}

export default MapMarker;
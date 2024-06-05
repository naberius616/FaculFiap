import React from 'react';
import { View, Image, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MenuBar from '../components/menuBar';
import './css/home.css';

const Home = () => {

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -24.0184396,
          longitude: -46.2873204,
          latitudeDelta: 1.04,
          longitudeDelta: 2.04,
        }}
      >
        <Marker
          coordinate={{ latitude: -23.9888838, longitude: -46.5276974 }}
          title="Região Perigosa"
          description="Animais selvagens ao redor dessa área"
        >
          <Image source={{uri: "https://cdn-icons-png.freepik.com/512/4201/4201973.png"}} style={{ width: 80, height: 80 }} />
        </Marker>
        <View>
          <Marker
            coordinate={{ latitude: -24.4733834, longitude: -46.2780295 }}
            title="Perigo de Extinção"
            description="Animais com perigo de extinção ao redor da área"
          >
            <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/284/284483.png"}} style={{ width: 60, height: 60 }} />
          </Marker>
          <Marker
            coordinate={{ latitude: -24.4733834, longitude: -46.2780295 }}
            title="Perigo de Extinção"
            description="Animais com perigo de extinção ao redor da área"
          >
            <Image source={{uri: "https://greenpng.com/wp-content/uploads/2020/07/20200728_132928.png"}} style={{ width: 200, height: 200 }} />
          </Marker>
        </View>
        <View>
          <Marker
            coordinate={{ latitude: -25.29704654, longitude: -46.7009554 }}
            title="Área de pesca"
            description="Animais com perigo de extinção ao redor da área"
          >
            <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/4207/4207682.png"}} style={{ width: 60, height: 60 }} />
          </Marker>
          <Marker
            coordinate={{ latitude: -25.29704654, longitude: -46.7009554 }}
            title="Área de pesca"
            description="Animais com perigo de extinção ao redor da área"
          >
            <Image source={{uri: "https://greenpng.com/wp-content/uploads/2020/07/20200728_132928.png"}} style={{ width: 200, height: 200 }} />
          </Marker>
        </View>
        <Marker
          coordinate={{ latitude: -26.29704654, longitude: -46.7009554 }}
          title="Perigo de Extinção"
          description="Animais com perigo de extinção ao redor da área"
        >
          <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/4207/4207682.png"}} style={{ width: 60, height: 60 }} />
        </Marker>
      </MapView>
      <MenuBar/>
    </View>
  );
}

export default Home;

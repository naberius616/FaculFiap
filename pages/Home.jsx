import React, {useState} from 'react';
import { View, Image, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MenuBar from '../components/menuBar';
import RNPickerSelect from "react-native-picker-select";
import MapMarker from '../components/mapMarker';
import './css/home.css';

const Home = () => {
  const [filterValue, setFilterValue] = useState('');
  const placeholder = {
    label: 'Selecione uma opção',
    color: '#000000',
  };

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
        <View>
          <View className="select-menu">
            <Text style={{
              fontSize: 20,
              top: 5,
              fontWeight: 'bold',
            }}>Filtrar</Text>
            <View style={{
              marginTop: 5,
            }}>
              <RNPickerSelect
                placeholder={placeholder}
                onValueChange={(value) => setFilterValue(value)}
                items={[
                  { label: "Todos", value: "Todos" },
                  { label: "Turismo", value: "Turismo" },
                  { label: "Pesca", value: "Pesca" },
                  { label: "Animais em Extinção", value: "Animais em Extinção" },
                  { label: "Região Perigosa", value: "Região Perigosa" },
                ]}
              />
            </View>
          </View>
        </View>
      {(filterValue == 'Todos' || filterValue == '') && (
        <View>
          <MapMarker markerTitle="Região Perigosa" markerDescription="Animais selvagens ao redor dessa área" markerLatitude={-23.9888838} markerLongitude={-46.5276974} markerHeight={60} markerWidth={60} circleWidth={100} circleHeight={100} markerUrl={"https://cdn-icons-png.freepik.com/512/4201/4201973.png"}/>
          <View>
            <MapMarker markerTitle="Perigo de Extinção" markerDescription="Animais com perigo de extinção ao redor da área" markerLatitude={-24.4733834} markerLongitude={-46.2780295} markerHeight={60} markerWidth={60} circleWidth={200} circleHeight={200} markerUrl={"https://cdn-icons-png.flaticon.com/512/284/284483.png"}/>
          </View>
          <View>
            <MapMarker markerTitle="Área de pesca" markerDescription="Animais com perigo de extinção ao redor da área" markerLatitude={-25.29704654} markerLongitude={-46.7009554} markerHeight={60} markerWidth={60} circleWidth={200} circleHeight={200} markerUrl={"https://cdn-icons-png.flaticon.com/512/4207/4207682.png"}/>
          </View>
          <View>
            <MapMarker markerTitle="Área de turismo" markerDescription="Área popular para turismo" markerLatitude={-23.5092161} markerLongitude={-46.6517039} markerHeight={60} markerWidth={60} circleWidth={200} circleHeight={200} markerUrl={"https://cdn.icon-icons.com/icons2/1310/PNG/512/city_86340.png"}/>
          </View>
          <View>
            <MapMarker markerTitle="Perigo de Extinção" markerDescription="Animais com perigo de extinção ao redor da área" markerLatitude={-26.29704654} markerLongitude={-46.7009554} markerHeight={60} markerWidth={60} circleWidth={200} circleHeight={200} markerUrl={"https://cdn-icons-png.flaticon.com/512/4207/4207682.png"}/>
          </View>
        </View>
      )}
      {filterValue === 'Turismo' && (
        <View>
          <Marker
             coordinate={{ latitude: -23.5092161, longitude: -46.6517039 }}
             title="Área de turismo"
             description="Área mais popular da cidade"
           >
             <Image source={{uri: "https://cdn.icon-icons.com/icons2/1310/PNG/512/city_86340.png"}} style={{ width: 60, height: 60 }} />
           </Marker>
           <Marker
             coordinate={{ latitude: -23.5092161, longitude: -46.6517039 }}
             title="Área de turismo"
             description="Área mais popular da cidade"
           >
             <Image source={{uri: "https://greenpng.com/wp-content/uploads/2020/07/20200728_132928.png"}} style={{ width: 200, height: 200 }} />
          </Marker>
        </View>     
      )}

  {filterValue === 'Pesca' && (
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
      )}

  {filterValue === 'Animais em Extinção' && (
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
      )}

{filterValue === 'Região Perigosa' && (
  <View>
  <Marker
    coordinate={{ latitude: -23.9888838, longitude: -46.5276974 }}
    title="Região Perigosa"
    description="Animais selvagens ao redor dessa área"
  >
    <Image source={{uri: "https://cdn-icons-png.freepik.com/512/4201/4201973.png"}} style={{ width: 80, height: 80 }} />
  </Marker>
</View>
)}

      </MapView>
      <MenuBar/>
    </View>
  );
}

export default Home;

import React, {useState} from 'react';
import { View, Image, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MenuBar from '../components/menuBar';
import RNPickerSelect from "react-native-picker-select";
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
              style={{
                top: 5,
              }}
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
          <View>
            <Marker
              coordinate={{ latitude: -23.9888838, longitude: -46.5276974 }}
              title="Região Perigosa"
              description="Animais selvagens ao redor dessa área"
            >
              <Image source={{uri: "https://cdn-icons-png.freepik.com/512/4201/4201973.png"}} style={{ width: 80, height: 80 }} />
            </Marker>
          </View>
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
          <Marker
            coordinate={{ latitude: -26.29704654, longitude: -46.7009554 }}
            title="Perigo de Extinção"
            description="Animais com perigo de extinção ao redor da área"
          >
            <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/4207/4207682.png"}} style={{ width: 60, height: 60 }} />
          </Marker>
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

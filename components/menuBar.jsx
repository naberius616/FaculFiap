import { View, TouchableOpacity } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MenuBar = () => {
  const navigation = useNavigation();

  return(
    <View className="menu-home">
        <View className="menu-button">
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Fontisto style={{position: 'absolute', marginLeft: -150, color: '#0f50aa',}} name="world" size={40}/>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Emergency')}> 
              <FontAwesome style={{position: 'absolute', marginLeft: -10,color: '#0f50aa',}} name="phone-square" size={40} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}> 
              <Ionicons style={{position: 'absolute', marginLeft: 120,color: '#0f50aa',}} name="notifications" size={45} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}

export default MenuBar;
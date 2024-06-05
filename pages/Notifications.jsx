import { View, Text } from "react-native"
import MenuBar from "../components/menuBar"

export default function Notifications() {
  return(
    <View style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>Você não possui notificações no momento</Text>
      </View>
      <MenuBar/>
    </View>
  )
}
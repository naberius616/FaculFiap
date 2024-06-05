import { View, Text, TextInput, Select, Button } from "react-native";
import MenuBar from "../components/menuBar";
import RNPickerSelect from "react-native-picker-select";
import './css/emergency.css'

export default function Emergency() {
  return(
    <View style={{ flex: 1 }}>
      <View className="emergency-div">
        <Text style={{fontSize: 30 }}>Emergência</Text>
      </View>
      <View>
        <TextInput
          multiline={true}
          numberOfLines={10}
          placeholder="Digite sua emergência"
          className="emergency-input"
          />
        <View className="emergency-div-select">
          <Text style={{fontSize: 18 }}>Selecione o tipo de emergência</Text>
          <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Denúncia", value: "Denúncia" },
                { label: "Emergência", value: "Emergência" },
                { label: "Feedback", value: "Feedback" },
              ]}
            />
            <View className="emergency-button">
              <Button color="white" title="Enviar"/>
            </View>
        </View>
      </View>
      <MenuBar/>
    </View>
  )
}
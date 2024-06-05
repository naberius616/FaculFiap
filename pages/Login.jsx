import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';
import './css/login.css'

export default function Login({ navigation }) {
  const [password, setPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false); 
  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
  }; 

  return(
    <View style={styles.container} className="container-login">
      <LinearGradient
              colors={["#ffffff", "#005bff", "#005bff"]}
              style={{
                flex: 1,
                width: 100 + "%"
              }}
      >
      <View style={{
        marginTop: -200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image 
        style={{
          position: 'relative',
          marginTop: 0,
          marginBottom: 50,
          width: 300,
          height: 200,
          alignContent: 'center'
        }}
        className="test"
        source={{uri: 'https://cdn.discordapp.com/attachments/845895935582011392/1247930112750653480/logo.png?ex=6661d0fc&is=66607f7c&hm=9b27e4eef77c027aec0704a53bcccf17671fcb9208d221f15cc7947de805d14c&'}}/>
        <View>
          <TextInput style={{
            margin: 10,
            height: 40,
            width: 300,
            color: 'black',
            backgroundColor: 'white',
            borderColor: 'gray',
            paddingLeft: 10,
            borderWidth: 1,
          }} className="input-style" placeholder='Digite o usuário'/>
          <View style={{
            display: 'flex',
          }}>
            <TextInput style={{
              margin: 10,
              height: 40,
              width: 300,
              paddingLeft: 10,
              color: 'black',
              backgroundColor: 'white',
              borderColor: 'gray',
              borderWidth: 1,
            }} 
            className="input-style"
            secureTextEntry={!showPassword} 
            onChangeText={setPassword} 
            placeholder='Digite sua senha'/>
            <MaterialCommunityIcons 
              name={showPassword ? 'eye-off' : 'eye'} 
              size={24} 
              color="#aaa"
              style={{
                marginTop: 20,
                marginLeft: 275,
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
                position: 'absolute',
              }} 
              onPress={toggleShowPassword} 
              /> 
          </View>
        </View>
        <View className="login-button" style={{marginTop: 10,}}>
          <Button
            color="white"
            className="button-style"
            title='Fazer login'
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View> 
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

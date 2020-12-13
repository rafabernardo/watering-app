import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


import backgroundImage from '../../assets/Frame.png';

export default function InitialPage() {
  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate('Register');
  }

  return (
    <View>
      <ImageBackground
        source={backgroundImage}
        style={{
          width: '100%',
          height: 500,
          position: 'relative',
          overflow: 'hidden',
        }}
        imageStyle={{
          resizeMode: 'cover',
          alignSelf: 'flex-start',
          flex: 1,
        }}
      >
        <Text style={styles.appName}>Watering App</Text>
      </ImageBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Bem vindo!</Text>
        
        <TouchableOpacity
          onPress={navigateToRegister}
          style={styles.button}>
          <Text style={styles.buttonTxt}>Cadastrar Planta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTxt}>Visualizar Plantas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

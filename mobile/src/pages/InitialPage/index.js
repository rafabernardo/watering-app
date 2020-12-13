import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../../assets/Frame.png';
import styles from './styles';

export default function InitialPage() {
  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate('Register');
  }

  function navigateToList() {
    navigation.navigate('ListPlants');
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
          activeOpacity={0.6}
          onPress={navigateToRegister}
          style={styles.button}>
          <Text style={styles.buttonTxt}>Cadastrar Planta</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} onPress={navigateToList} style={styles.button}>
          <Text style={styles.buttonTxt}>Visualizar Plantas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

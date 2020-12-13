import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export default function InitialPage() {
  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo!</Text>
      <TouchableOpacity
        onPress={navigateToRegister}
        style={styles.button}>
        <Text>Cadastrar Planta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Visualizar Plantas</Text>
      </TouchableOpacity>
    </View>
  );
}

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function InitialPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo!</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Cadastrar Planta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Visualizar Plantas</Text>
      </TouchableOpacity>
    </View>
  );
}

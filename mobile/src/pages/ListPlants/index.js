import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function ListPlants() {
   const navigation = useNavigation();

   function navigateBack() {
      navigation.goBack();
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

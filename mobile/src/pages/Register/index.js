import React from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export default function Register() {
   const navigation = useNavigation();
   function navigateBack() {
      navigation.goBack();
   }
   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.title}>
               Cadastrar nova planta
            </Text>
            <TouchableOpacity onPress={navigateBack}>
               <Feather name="arrow-left" size={28} color="blue" />
            </TouchableOpacity>
         </View>
         <View >

         </View>
         <View style={styles.regBox}>
            <View style={styles.regItem}>
               <Text style={styles.regTitle}>Espécie</Text>
               <TextInput style={styles.regInput}
                  onChangeText={() => { }}
                  placeholder="Digite o nome da espécie"
               />
            </View>
            <View style={styles.regItem}>
               <Text style={styles.regTitle}>Nivel de umidade</Text>
               <TextInput style={styles.regInput}
                  onChangeText={() => { }}
                  placeholder="Digite o nivel de umidade necessaria"
               />
            </View>
            <View style={styles.regItem}>
               <Text style={styles.regTitle}>data de aquisição</Text>
               <Text style={styles.regInput}
                  onChangeText={() => { }}
                  placeholder="Digite o nome da espécie"
               />
            </View>

            <View style={styles.regItem}>
               <Text style={styles.regTitle}>Localição</Text>
               <TextInput style={styles.regInput}
                  onChangeText={() => { }}
                  placeholder="selecionar a localização"
               />
            </View>
         </View>
         <View>
            <Button
               onPress={() => { }}
               title="Salvar"
               color="blue"
               accessibilityLabel="Learn more about this purple button"
            />
         </View>
      </View>
   )
}
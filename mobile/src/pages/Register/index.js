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
   async function handleAddRegister() {
      const response = await api.post()

      console.log("registro salvo com sucesso");
      navigation.navigate('Pagina Inicial');
   }

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.title}>
               Cadastrar nova planta
            </Text>
            <TouchableOpacity onPress={navigateBack}>
               <Feather name="arrow-left" size={28} color="#FF9933" />
            </TouchableOpacity>
         </View>
         <View >

         </View>
         <View style={styles.regBox}>
            <View style={styles.regItem}>
               <Text style={styles.regTitle}>Nome da planta</Text>
               <TextInput style={styles.regInput}
                  onChangeText={() => { }}
                  placeholder="Digite o nome sua plantinha"
                  placeholderTextColor="#CCCCCC"

               />
            </View>
            <View style={styles.regItem}>
               <Text style={styles.regTitle}>Espécie</Text>
               <TextInput style={styles.regInput}
                  onChangeText={() => { }}
                  placeholder="Digite o nome da espécie"
                  placeholderTextColor="#CCCCCC"

               />
            </View>
            <View style={styles.regItem}>
               <Text style={styles.regTitle}>Nivel de umidade</Text>
               <TextInput style={styles.regInput}
                  onChangeText={() => { }}
                  placeholder="Digite o nivel de umidade necessaria"
                  placeholderTextColor="#CCCCCC"

               />
            </View>
            <View style={styles.regItem}>
               <Text style={styles.regTitle}>data de aquisição</Text>
               <Text style={styles.regInput}
                  onChangeText={() => { }}
                  placeholder="Digite o nome da espécie"
                  placeholderTextColor="#CCCCCC"

               />
            </View>

            <View style={styles.regItem}>
               <Text style={styles.regTitle}>Localição</Text>
               <TextInput style={styles.regInput}
                  onChangeText={() => { }}
                  placeholder="selecionar a localização"
                  placeholderTextColor="#CCCCCC"

               />
            </View>


         </View>

         <TouchableOpacity
            activeOpacity={0.6}
            style={styles.saveButton}
            onPress={handleAddRegister}
            color="#FF9933">
            <Text style={styles.textSaveButton}
            >
               Salvar
            </Text>
         </TouchableOpacity>

      </View>
   )
}
import React from 'react';
import { Text, View, Button } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

export default function Register() {
   return (
      <View style={styles.container}>
         <View >
            <Text style={styles.title}>
               Cadastrar nova planta
            </Text>
         </View>
         <View >
            <Text style={styles.reg}>
               Espécie
            </Text>
            <TextInput style={styles.regInput}
               onChangeText={() => { }}
               placeholder="Digite o nome da espécie"
            />
         </View>
         <View >
            <Text style={styles.reg}>
               Nivel de umidade
            </Text>
            <TextInput style={styles.regInput}
               onChangeText={() => { }}
               placeholder="Digite o nivel de umidade necessaria"
            />
         </View>
         <View >
            <Text style={styles.reg}>
               data de aquisição
            </Text>
            <Text style={styles.regInput}
               onChangeText={() => { }}
               placeholder="Digite o nome da espécie"
            />
         </View>
         <View >
            <Text style={styles.reg}>
               Localição
            </Text>
            <TextInput style={styles.regInput}
               onChangeText={() => { }}
               placeholder="selecionar a localização"
            />
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
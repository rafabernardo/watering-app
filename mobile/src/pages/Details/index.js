import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import moment from 'moment';

import styles from './styles';
import backgroundImage from '../../assets/Frame2.png';

export default function Details() {
  const route = useRoute();
  const plant = route.params.plant;
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <ImageBackground
      source={backgroundImage}
      style={{
        flex: 1,
      }}
      imageStyle={{
        resizeMode: 'cover',
        alignSelf: 'flex-start',
        flex: 1,
        opacity: 0.4,
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Feather name='arrow-left' size={28} color='#FFF' />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={[styles.txtProperty, { marginTop: 0 }]}>
            Nome: <Text style={styles.txtValue}>{plant.name}</Text>
          </Text>

          <Text style={styles.txtProperty}>
            Espécie: <Text style={styles.txtValue}>{plant.species}</Text>
          </Text>

          <Text style={styles.txtProperty}>
            Local: <Text style={styles.txtValue}>{plant.locate}</Text>
          </Text>

          <Text style={styles.txtProperty}>
            Nivel de Umidade:{' '}
            <Text style={styles.txtValue}>{plant.humidity_level}</Text>
          </Text>

          <Text style={styles.txtValue}>
            Última rega foi em{' '}
            <Text style={styles.dateText}>{moment(plant.watering_date).format('DD/MM/YY [às] hh:mm')} </Text>
          </Text>
          <Text style={styles.txtValue}>
            Data da aquisição foi em{' '}
            <Text style={styles.dateText}>{moment(plant.acquisition_date).format('DD/MM/YY [às] hh:mm')} </Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

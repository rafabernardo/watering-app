import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import moment from 'moment';

import api from '../../services/api';

import styles from './styles';

export default function ListPlants() {
  const [plants, setPlants] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigationToDetail(plant) {
    navigation.navigate('Details', { plant });
  }

  async function loadPlants() {
    if (loading) {
      return;
    }

    if (total > 0 && plants.length === total) {
      return;
    }

    setLoading(true);
    const response = await api.get('list_plants', {
      params: { page },
    });
    console.log(response.data);
    setPlants([...plants, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPlants();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={plants}
        keyExtractor={(plant) => String(plant.id)}
        onEndReached={loadPlants}
        onEndReachedThreshold={0.2}
        renderItem={({ item: plant }) => (
          <View>
            <Text>{plant.name}</Text>

            <Text>{plant.species}</Text>

            {/* <Text>Localização:</Text>
            <Text>{plant.locate}</Text> */}

            {/* <Text>Última rega foi em {moment(plant.watering_date).format('DD-MMM-YYYY [às] hh:mm')}</Text>
            <Text>Data da aquisição foi em {moment(plant.acquisition_date).format('DD-MMM-YYYY [às] hh:mm')}</Text> */}
            <TouchableOpacity onPress={() => navigationToDetail(plant)}>
              <Text style={styles.detailsButtonText}>Ver Mais Detalhes</Text>
              <Feather name='arrow-right' size={16} color='#E02041' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';

import api from '../../services/api';
import backgroundImage from '../../assets/Frame2.png';

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

  function navigateBack() {
    navigation.goBack();
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
    <ImageBackground
      source={backgroundImage}
      style={{
        flex: 1,
      }}
      imageStyle={{
        resizeMode: 'cover',
        alignSelf: 'flex-start',
        flex: 1,
        opacity: 0.4
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigateBack()}>
          <Feather name='arrow-left' size={24} color='#FFF' />
        </TouchableOpacity>
        <Text style={styles.title}>Aqui estão as suas plantas</Text>

        <FlatList
          style={styles.plantList}
          data={plants}
          keyExtractor={(plant) => String(plant.id)}
          // showsVerticalScrollIndicator={false}
          onEndReached={loadPlants}
          onEndReachedThreshold={0.2}
          renderItem={({ item: plant }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.txtProperty}>{plant.name}</Text>
                <Text style={styles.txtValue}>{plant.species}</Text>
              </View>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigationToDetail(plant)}
              >
                <Feather name='arrow-right' size={16} color='#FFF' />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import DatePicker from '@react-native-community/datetimepicker';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

import { postRegister } from '../../services/RegisterService';
import styles from './styles';
import backgroundImage from '../../assets/Frame2.png';

export default function Register() {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [locate, setLocate] = useState('');
  const [humidity_level, setHumidity] = useState('');
  const [acquisition_date, setAcquisition_date] = useState(moment(new Date()));
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }
  function navigateToHome() {
    navigation.navigate('Pagina Inicial');
  }

  const nameFocus = useRef(null);

  useEffect(() => {
    nameFocus.current.focus();
  }, []);

  const onChangeName = (txtName) => {
    setName(txtName);
  };
  const onChangeSpecie = (txtSpecie) => {
    setSpecies(txtSpecie);
  };
  const onChangeHumidity = (txtHumidity) => {
    setHumidity(txtHumidity);
  };
  const onChangeLocate = (txtLocate) => {
    setLocate(txtLocate);
  };

  const onDataChange = (e, date) => {
    setShowDatePicker(false);
    if(date){
      setAcquisition_date(moment(date));
    }
  };

  const onSave = async () => {
    postRegister({
      name,
      species,
      locate,
      humidity_level,
      acquisition_date,
    })
      .then(() => {
        setName('');
        setSpecies('');
        setLocate('');
        setHumidity('');
        navigation.navigate('Pagina Inicial');
      })
      .catch((err) => {
        console.log('Erro: ', err);
      });
  };

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
          <Text style={styles.title}>Cadastrar nova planta</Text>
          <TouchableOpacity onPress={navigateBack}>
            <Feather name='arrow-left' size={28} color='#FF9933' />
          </TouchableOpacity>
        </View>
        <View></View>
        <View style={styles.regBox}>
          <View style={styles.regItem}>
            <Text style={styles.regTitle}>Nome da planta</Text>
            <TextInput
              style={styles.regInput}
              placeholder='Digite o nome sua plantinha'
              placeholderTextColor='#737380'
              ref={nameFocus}
              value={name}
              onChangeText={(txtName) => onChangeName(txtName)}
            />
          </View>

          <View style={styles.regItem}>
            <Text style={styles.regTitle}>Espécie</Text>
            <TextInput
              style={styles.regInput}
              placeholder='Digite o nome da espécie'
              placeholderTextColor='#737380'
              value={species}
              onChangeText={(txtSpecie) => onChangeSpecie(txtSpecie)}
            />
          </View>
          <View style={styles.regItem}>
            <Text style={styles.regTitle}>Nivel de umidade</Text>
            <TextInput
              style={styles.regInput}
              placeholder='Digite o nivel de umidade necessária'
              placeholderTextColor='#737380'
              value={humidity_level}
              onChangeText={(txtHumidity) => onChangeHumidity(txtHumidity)}
            />
          </View>
          <View style={styles.regItem}>
            <Text style={styles.regTitle}>Data de aquisição: </Text>
            <TouchableOpacity
              activeOpacity={0}
              onPress={() => setShowDatePicker(!showDatePicker)}
            >
              <Text style={styles.regInput}>
                {acquisition_date.format('DD/MM/YYYY')}
              </Text>
              {showDatePicker && (
                <View>
                  <DatePicker
                    value={new Date(acquisition_date)}
                    timeZoneOffsetInMinutes={0}
                    mode={'date'}
                    onChange={onDataChange}
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.regItem}>
            <Text style={styles.regTitle}>Localição</Text>
            <TextInput
              style={styles.regInput}
              placeholder='selecionar a localização'
              placeholderTextColor='#737380'
              value={locate}
              onChangeText={(txtLocate) => onChangeLocate(txtLocate)}
            />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.saveButton}
          onPress={onSave}
        >
          <Text style={styles.textSaveButton}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

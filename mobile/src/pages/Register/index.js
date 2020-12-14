import React, { setState, useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { postRegister } from '../../services/RegisterService';
import styles from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [locate, setLocate] = useState('');
  const [humidity_level, setHumidity] = useState('');
  const [acquisition_date, setAcquisition_date] = useState(new Date());

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
  onSave = async () => {
    let today = new Date();

    // let dd = String(today.getDate()).padStart(2, '0');
    // let mm = String(today.getMonth() + 1).padStart(2, '0');
    // let yyyy = today.getFullYear();

    // let hh = today.getHours();
    // let min = today.getMinutes();

    // min.length === 1 ? min = "0" + min : null;

    // let acquisition_date = `${dd}/${mm}/${yyyy} ${hh}:${min}`;

    console.log('entrou no save');
    postRegister({
      name,
      species,
      locate,
      humidity_level,
      acquisition_date,
    })
      .then(() => {
        console.log('entrou no then save');

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
            placeholderTextColor='#CCCCCC'
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
            placeholderTextColor='#CCCCCC'
            value={species}
            onChangeText={(txtSpecie) => onChangeSpecie(txtSpecie)}
          />
        </View>
        <View style={styles.regItem}>
          <Text style={styles.regTitle}>Nivel de umidade</Text>
          <TextInput
            style={styles.regInput}
            placeholder='Digite o nivel de umidade necessaria'
            placeholderTextColor='#CCCCCC'
            value={humidity_level}
            onChangeText={(txtHumidity) => onChangeHumidity(txtHumidity)}
          />
        </View>
        <View style={styles.regItem}>
          <Text style={styles.regTitle}>data de aquisição</Text>
          <DatePicker
            style={styles.datePickerStyle}
            date={acquisition_date}
            mode='date'
            placeholder='select date'
            format='DD-MM-YYYY'
            minDate='01-01-2000'
            maxDate='01-01-2025'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              setAcquisition_date(date);
            }}
          />
        </View>

        <View style={styles.regItem}>
          <Text style={styles.regTitle}>Localição</Text>
          <TextInput
            style={styles.regInput}
            placeholder='selecionar a localização'
            placeholderTextColor='#CCCCCC'
            value={locate}
            onChangeText={(txtLocate) => onChangeLocate(txtLocate)}
          />
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.saveButton}
        onPress={onSave}
        color='#FF9933'
      >
        <Text style={styles.textSaveButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

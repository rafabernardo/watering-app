import React, { useState } from 'react';
import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';

const fetchFonts = () => {
  return Font.loadAsync({});
};

export default function App() {
  const [isLoaded] = useFonts({
    'AirbnbCerealBold': require('./assets/fonts/AirbnbCerealBold.ttf'),
    'AirbnbCerealBook': require('./assets/fonts/AirbnbCerealBook.ttf'),
    'AirbnbCerealLight': require('./assets/fonts/AirbnbCerealLight.ttf'),
    'AirbnbCerealMedium': require('./assets/fonts/AirbnbCerealMedium.ttf'),
    
  });

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Routes />
    );
  }

  // if(!dataLoaded){
  //   return(
  //     <AppLoading
  //     startAsync={fetchFonts}
  //     onFinish={()=>{setDataLoaded(true)}}
  //     onError={console.warn}/>
  //   )
  // }

  // return <Routes />;
}

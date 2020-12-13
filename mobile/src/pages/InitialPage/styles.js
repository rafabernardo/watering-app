import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  appName: {
    position: 'absolute',
    color: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    fontSize: 30,
    top: 205,
    textTransform: 'uppercase',
    fontFamily: 'AirbnbCerealBold'
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#3F414E',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'AirbnbCerealMedium',
  },

  button: {
   margin: 10,
   backgroundColor: '#48C9D6',
   height: 30,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 8,
  },
  buttonTxt: {
    fontFamily: 'AirbnbCerealBook',
    color: '#FBFAF8'
  }
});

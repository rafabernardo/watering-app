import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 16,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  
  txtProperty: {
    fontSize: 14,
    fontFamily: 'AirbnbCerealBook',
    color: '#F29071',
    
  },

  txtValue: {
    fontSize: 14,
    color: '#A0A3B1',
    fontFamily: 'AirbnbCerealBook',
  },

  dateText: {
   fontSize: 14,
   color: '#A0A3B1',
   fontFamily: 'AirbnbCerealBook',
   fontStyle: 'italic'
  }
});

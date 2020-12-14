import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight + 10
   },

   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },

   title: {
      fontSize: 30,
      marginBottom: 16,
      marginTop: 48,
      color: '#13131a',
      fontWeight: 'bold',
      textAlign: 'center',
   },
   regBox: {
      padding: 16,
      borderRadius: 8,
      backgroundColor: '#fff',
   },
   regItem: {
      padding: 12,
      borderRadius: 8,
      backgroundColor: '#f3f3f2',
      marginBottom: 16,
   },
   regTitle: {
      fontSize: 20,
      color: '#F29071',
      fontWeight: 'bold',
   },
   regInput: {
      fontSize: 16,
      color: '#737380',
      fontFamily: 'AirbnbCerealLight',

   },
   saveButton: {
      margin: 10,
      height: 60,
      backgroundColor: '#48C9D6',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center'
   },
   textSaveButton: {
      fontSize: 26,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
   }
  

})
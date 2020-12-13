import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight + 10

   },
   title: {
      fontSize: 30,
      marginBottom: 16,
      marginTop: 48,
      color: '#13131a',
      fontWeight: 'bold',
      textAlign: 'center',
   },
   reg: {
      fontSize: 18,
      color: '#13131a',
      fontWeight: 'bold',
   },
   regInput: {
      fontSize: 16,
      color: '#555555',
      fontWeight: 'bold',
   },
   buttonSave: {
      fontSize: 20,
   }

})
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
      padding: 24,
      borderRadius: 8,
      backgroundColor: '#fff',
      marginBottom: 16,
   },
   regItem: {
      padding: 12,
      borderRadius: 8,
      backgroundColor: '#CCCCCC',
      marginBottom: 16,
   },
   regTitle: {
      fontSize: 20,
      color: '#FF9933',
      fontWeight: 'bold',
   },
   regInput: {
      fontSize: 16,
      color: '#555555',
      fontWeight: 'bold',
   },
   saveButton: {
      borderRadius: 16,

   }

})
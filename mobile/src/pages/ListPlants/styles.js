import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },

  incidentList: {
    marginTop: 32,
  },

  card: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    flexDirection: 'row',
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

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },

  detailsButton: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72D5DF',
    height: 30,
    width: 30,
    borderRadius: 100,
  },
});

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   title: {
//     fontSize: 30,
//     marginBottom: 16,
//     marginTop: 50,
//     color: '#13131a',
//     fontFamily: 'AirbnbCerealBook',
//     textAlign: 'center',
//   },

//   plantsList: {
//     paddingLeft: 8,
//     alignItems: 'flex-end',
//   },

//   card: {
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderTopLeftRadius: 40,
//     borderBottomLeftRadius: 40,
//     marginTop: 10,
//     width: 350,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,

//     elevation: 2,
//   },

//   contentCard: {
//     margin: 10,
//   },

//   cardTitle: {
//     fontSize: 20,
//     textTransform: 'uppercase',
//     fontFamily: 'AirbnbCerealBold',
//     marginLeft: 10,
//     color: '#F29071'
//   },

//   cardSubTitle: {
//     fontStyle: 'italic',
//     fontFamily: 'AirbnbCerealLight',
//     fontSize: 14,
//     marginLeft: 10,
//     color: '#272724'
//   },

//   buttonCard: {
//     alignSelf: 'flex-end',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#72D5DF',
//     height: 30,
//     width: 30,
//     borderRadius: 100
//   },
// });

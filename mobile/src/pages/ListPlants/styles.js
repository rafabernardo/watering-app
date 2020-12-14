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

  plantList: {
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

  txtProperty: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontFamily: 'AirbnbCerealBold',
    marginLeft: 10,
    color: '#F29071',
  },

  txtValue: {
    marginLeft: 10,
    fontSize: 15,
    marginBottom: 24,
    color: '#A0A3B1',
    fontStyle: 'italic',
    fontFamily: 'AirbnbCerealLight',
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

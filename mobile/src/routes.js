import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import InitialPage from './pages/InitialPage';
import Register from './pages/Register';
import ListPlants from './pages/ListPlants';
import Details from './pages/Details';


export default function Routes() {
   return (
      <NavigationContainer>
         <AppStack.Navigator 
         screenOptions={{ headerShown: false }}
         initialRouteName="Register"
         >
            
            <AppStack.Screen name="Pagina Inicial" component={InitialPage} />
            <AppStack.Screen name="Register" component={Register} />
            <AppStack.Screen name="ListPlants" component={ListPlants} />
            <AppStack.Screen name="Details" component={Details} />
         </AppStack.Navigator>
      </NavigationContainer>
   );
}
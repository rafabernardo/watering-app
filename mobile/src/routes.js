import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import InitialPage from './pages/InitialPage';
import Register from './pages/Register';


export default function Routes() {
   return (
      <NavigationContainer>
         <AppStack.Navigator>
            <AppStack.Screen name="InitialPage" component={InitialPage} />
            <AppStack.Screen name="Register" component={Register} />
         </AppStack.Navigator>
      </NavigationContainer>
   );
}
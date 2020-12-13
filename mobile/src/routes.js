import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import InitialPage from './pages/InitialPage'

export default function Routes() {
   return (
      <NavigationContainer>
         <AppStack.Navigator>
            <AppStack.Screen component={} />
         </AppStack.Navigator>
      </NavigationContainer>
   );
}
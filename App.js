import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import ContactView from './components/ContactView';
import NewContact from './components/NewContact';
import ContactDetail from './components/ContactDetail';

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'New'}>
        <Stack.Screen name="Home" component={ContactView} options={{ title: 'Contacts' }} />
        <Stack.Screen name="New" component={NewContact} options={{ title: 'Create a contact' }} />
        <Stack.Screen name="Detail" component={ContactDetail} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

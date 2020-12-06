import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

global.db = SQLite.openDatabase(
  {
    name: 'SQLite',
    location: 'default',
    createFromLocation: '~SQLite.db',
  },
  () => { },
  error => {
    console.log("ERROR: " + error);
  }
);

const Stack = createStackNavigator();

import ContactView from './components/ContactView';
import ContactDetail from './components/ContactDetail';

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ContactView} options={{ title: 'Contacts' }} />
        <Stack.Screen name="Detail" component={ContactDetail} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



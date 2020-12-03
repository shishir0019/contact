import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from "./assets/style";
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Stack = createStackNavigator();

import ContactView from './components/ContactView';

const Home = () => {
  return (
    <View style={{ marginTop: getStatusBarHeight(), ...styles.main }}>
      <Text style={styles.title}>Contact Maneger</Text>
      <ContactView />
    </View>
  )
}


const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
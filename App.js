import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { View, StyleSheet, Text } from 'react-native';

import ContactView from './components/ContactView';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <Text style={{fontSize: 25, color: '#333'}}>Contact Manager</Text>
      </View>
      <ContactView />
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    marginTop: getStatusBarHeight()
  },
  head:{
    justifyContent: 'center',
    alignItems: 'center',
  }
})
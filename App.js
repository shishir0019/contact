import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import { list } from "./shared/contacts";

import ContactView from './components/ContactView';

export default function App() {
  return (
    <View>
      <ContactView />
    </View>
  );
}

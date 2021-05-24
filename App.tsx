import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  {Dashboard}  from './src/pages/Dashboard';

export default function App() {
  return (
    <Dashboard/>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

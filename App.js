import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Card from './components/Card';
import List from './components/List';

function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <List></List>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App

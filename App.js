import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import List from './components/List';

function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <List/>
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

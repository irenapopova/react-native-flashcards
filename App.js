import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddCard from './components/AddCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Merry Christmas @everyone!</Text>
      <AddCard></AddCard>
    </View>
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

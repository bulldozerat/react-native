import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <About />
      <ReviewDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

const Home = () => (
  <View style={styles.container}>
    <Text style={globalStyles.titleText}>Home Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
});

export default Home;

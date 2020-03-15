import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Other
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

// Components
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Home />
        <About />
        <ReviewDetails />
      </View>
    );
  }

  return <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

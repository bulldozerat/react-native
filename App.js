import React, { useState } from 'react';
import { View } from 'react-native';

//Other
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { globalStyles } from './styles/global';

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
      <View style={globalStyles.container}>
        <Home />
        <About />
        <ReviewDetails />
      </View>
    );
  }

  return <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />;
}

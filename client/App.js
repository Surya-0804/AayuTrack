import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

// Import screens
import OnboardingScreen from './screens/onboarding/OnboardingScreen';

const Stack = createStackNavigator();

const getFonts = () =>
  Font.loadAsync({
    Nunito: require('./assets/fonts/Nunito-VariableFont_wght.ttf'),
    'Nunito-Italic': require('./assets/fonts/Nunito-Italic-VariableFont_wght.ttf'),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

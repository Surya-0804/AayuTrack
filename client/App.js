import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

// Import screens
import OnboardingScreen from './screens/onboarding/OnboardingScreen';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import BottomTabNavigator from './navigation/CustomTabBar';

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
        initialRouteName="MainApp"
        screenOptions={{ headerShown: false }}
      >
        {/* Auth Screens - No tabs visible */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

        {/* Main App - With tabs visible */}
        <Stack.Screen
          name="MainApp"
          component={BottomTabNavigator}
          options={{ gestureEnabled: false }} // Prevent swipe back to auth
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

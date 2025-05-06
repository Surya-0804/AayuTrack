import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import OnboardingScreen from './OnboardingScreen';

const OnboardingFlow = ({ screens, onComplete }) => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const isLastScreen = currentScreenIndex === screens.length - 1;

  const handleSkip = () => {
    // Skip to the end or complete onboarding
    onComplete();
  };

  const handleNext = () => {
    if (isLastScreen) {
      // Complete onboarding
      onComplete();
    } else {
      // Move to next screen
      setCurrentScreenIndex((prevIndex) => prevIndex + 1);
    }
  };

  const currentScreen = screens[currentScreenIndex];

  return (
    <OnboardingScreen
      image={currentScreen.image}
      header={currentScreen.header}
      description={currentScreen.description}
      currentIndex={currentScreenIndex}
      totalScreens={screens.length}
      onSkip={handleSkip}
      onNext={handleNext}
      isLastScreen={isLastScreen}
    />
  );
};

export default OnboardingFlow;

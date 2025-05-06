import React from 'react';
import OnboardingFlow from '../../components/onboarding/OnboardingFlow';
import { onboardingScreens } from '../../constants/onboardingFlow';

const OnboardingScreen = ({ navigation }) => {
  const handleComplete = () => {
    navigation.navigate('Login');
    // alert('Onboarding completed!');
  };

  return (
    <OnboardingFlow screens={onboardingScreens} onComplete={handleComplete} />
  );
};

export default OnboardingScreen;

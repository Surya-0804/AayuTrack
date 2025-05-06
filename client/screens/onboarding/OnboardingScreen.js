import React from 'react';
import OnboardingFlow from '../../components/onboarding/OnboardingFlow';
import { onboardingScreens } from '../../constants/onboardingFlow';

const OnboardingScreen = ({ navigation }) => {
  const handleComplete = () => {
    // Navigate to the home screen or login screen when onboarding completes
    // navigation.navigate('Home');
    alert('Onboarding completed!');
  };

  return (
    <OnboardingFlow screens={onboardingScreens} onComplete={handleComplete} />
  );
};

export default OnboardingScreen;

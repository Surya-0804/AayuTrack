import React from 'react';
import { Image, SafeAreaView, Text, View, StyleSheet } from 'react-native';

import DotsIndicator from './DotIndicator';
import BottomNavBar from './BottomNavBar';

const OnboardingScreen = ({
  image,
  header,
  description,
  currentIndex,
  totalScreens,
  onSkip,
  onNext,
  isLastScreen = false,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={image} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.header}>{header}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>

        <DotsIndicator currentIndex={currentIndex} totalDots={totalScreens} />
      </View>

      <BottomNavBar
        onSkip={onSkip}
        onNext={onNext}
        isLastScreen={isLastScreen}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Nunito',
    textAlign: 'center',
    color: '#666',
  },
});

export default OnboardingScreen;

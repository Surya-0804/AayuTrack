import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BottomNavBar = ({
  onSkip,
  onNext,
  isLastScreen = false,
  skipText = 'Skip',
  nextText = 'Next',
  finalText = 'Get Started',
}) => {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity onPress={onSkip}>
        <Text style={styles.skipText}>{skipText}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton} onPress={onNext}>
        <Text style={styles.nextText}>
          {isLastScreen ? finalText : nextText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 16,
    color: '#1BD967',
    fontWeight: '600',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  nextButton: {
    backgroundColor: '#1BD967',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  nextText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BottomNavBar;

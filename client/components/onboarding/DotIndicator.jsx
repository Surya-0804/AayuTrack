import React from 'react';
import { View, StyleSheet } from 'react-native';

const DotsIndicator = ({ currentIndex, totalDots = 3 }) => {
  return (
    <View style={styles.dotsContainer}>
      {Array(totalDots)
        .fill()
        .map((_, index) => (
          <View
            key={index}
            style={index === currentIndex ? styles.dotActive : styles.dot}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1BD967',
    marginHorizontal: 4,
  },
});

export default DotsIndicator;

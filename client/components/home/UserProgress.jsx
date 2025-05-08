import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const UserProgress = () => {
  const [isWeekly, setIsWeekly] = useState(true);

  const toggleView = (weekly) => {
    setIsWeekly(weekly);
  };

  return (
    <View style={styles.container}>
      {/* Week/Day Toggle - Aligned to the Left */}
      <View style={styles.toggleWrapper}>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, isWeekly ? styles.activeToggle : null]}
            onPress={() => toggleView(true)}
          >
            <Text
              style={[styles.toggleText, isWeekly ? styles.activeText : null]}
            >
              Week
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              !isWeekly ? styles.activeToggle : null,
            ]}
            onPress={() => toggleView(false)}
          >
            <Text
              style={[styles.toggleText, !isWeekly ? styles.activeText : null]}
            >
              Day
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Circular Progress */}
      <View style={styles.progressContainer}>
        <AnimatedCircularProgress
          size={150}
          width={8}
          fill={20}
          tintColor="#1BD967"
          lineCap="round"
          backgroundColor="rgba(172, 213, 188, 0.33)"
          rotation={0}
        >
          {(fill) => (
            <Text style={styles.progressText}>{Math.round(fill)}%</Text>
          )}
        </AnimatedCircularProgress>
        <Text style={styles.progressSubtext}>For this Week</Text>
      </View>

      {/* Stats Cards - Horizontal layout with green number background */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <View style={styles.numberBadge}>
            <Text style={styles.statNumber}>8</Text>
          </View>
          <Text style={styles.statLabel}>Consumed Medicines</Text>
        </View>
        <View style={styles.statItem}>
          <View style={styles.numberBadge}>
            <Text style={styles.statNumber}>20</Text>
          </View>
          <Text style={styles.statLabel}>Total Medicines</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  toggleWrapper: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 4,
    width: 120,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 16,
  },
  activeToggle: {
    backgroundColor: '#10B981',
    borderRadius: 14,
  },
  toggleText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Nunito',
    color: '#10B981',
  },
  activeText: {
    color: 'white',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  progressText: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Nunito',
    color: 'white',
  },
  progressSubtext: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Nunito',
    fontWeight: '800',
    opacity: 0.9,
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  numberBadge: {
    backgroundColor: 'rgba(27, 217, 103, 0.53)',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  statNumber: {
    fontSize: 16,
    fontFamily: 'Nunito',
    fontWeight: '900',
    color: 'white',
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Nunito',
    fontWeight: '900',
    color: 'white',
  },
});

export default UserProgress;

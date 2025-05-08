import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import HomeHeader from '../../components/home/HomeHeader';
import UserProgress from '../../components/home/UserProgress';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0B5F2C" barStyle="light-content" />
      <HomeHeader />
      <UserProgress />
      {/* <TodaysSchedule />
      <BottomNavigation /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B5F2C',
  },
});

export default Home;

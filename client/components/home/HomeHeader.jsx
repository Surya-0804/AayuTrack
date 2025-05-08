import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HomeHeader = () => {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/icon.png')} // Replace with your image source
          style={styles.profileImage}
          // If you don't have an image, you can comment the Image component
          // and uncomment the Text component below
        />
        {/* <Text style={styles.profileInitial}>S</Text> */}
      </View>

      {/* User Information */}
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Surya Abothula</Text>
        <View style={styles.userDetailRow}>
          <View style={styles.onlineIndicator} />
          <Text style={styles.userDetails}>surya21 - Male, 20</Text>
        </View>
      </View>

      {/* Notification Bell */}
      <View style={styles.notificationContainer}>
        {/* <Text style={styles.notificationIcon}>🔔</Text> */}
        {/* Alternatively, you can use an icon library like @expo/vector-icons */}
        <Ionicons name="notifications" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#10B981',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileInitial: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B5F2C',
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  onlineIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 6,
  },
  userDetails: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  notificationContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(16, 185, 129, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    fontSize: 20,
  },
});

export default HomeHeader;

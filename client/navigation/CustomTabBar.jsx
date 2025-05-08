import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Screens (replace with your actual screens)
import Home from '../screens/home/Home';

const Tab = createBottomTabNavigator();

const CustomTabBarIcon = ({
  focused,
  iconName,
  label,
  isCenter = false,
  IconComponent = Ionicons,
}) => {
  return (
    <View style={[styles.tabContainer, isCenter && styles.centerTabContainer]}>
      <IconComponent
        name={iconName}
        size={24}
        color={isCenter ? 'white' : focused ? '#1BD967' : '#888'}
      />
      {label && (
        <Text
          style={[
            isCenter ? styles.centerTabLabel : styles.tabLabel,
            !isCenter && focused && styles.tabLabelFocused,
          ]}
        >
          {label}
        </Text>
      )}
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false, // Hide default labels since we use custom ones
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName={focused ? 'home' : 'home-outline'}
              label="Home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Medicine"
        component={Home} // Replace with your Medicine screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName={focused ? 'pill' : 'pill'}
              label="Medicine"
              IconComponent={MaterialCommunityIcons}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Home} // Replace with your History screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName={focused ? 'calendar' : 'calendar-outline'}
              // label="History"
              isCenter
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={Home} // Replace with your Clock screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName={focused ? 'time' : 'time-outline'}
              label="History"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home} // Replace with your Profile screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName={focused ? 'person' : 'person-outline'}
              label="Profile"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    backgroundColor: 'white',
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // This will help in centering the icons
    paddingTop: 8, // Adjust this value as needed
    width: 80,
  },
  centerTabContainer: {
    backgroundColor: '#1BD967',
    borderWidth: 5,
    borderColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 35,
    marginTop: -20,
    paddingTop: 0,
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    fontFamily: 'Nunito',
    fontWeight: '700',
    color: '#888',
    marginTop: 4,
  },
  tabLabelFocused: {
    color: '#1BD967',
    fontWeight: '900',
  },
  centerTabLabel: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Nunito',
    fontWeight: '700',
    marginTop: 4,
  },
});

export default BottomTabNavigator;

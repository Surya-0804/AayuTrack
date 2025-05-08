import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Animated, Platform } from 'react-native';

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
  // Animation for tab press
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (focused) {
      // When tab becomes focused, create a subtle pop effect
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [focused, scaleValue]);

  return (
    <Animated.View
      style={[
        styles.tabContainer,
        isCenter && styles.centerTabContainer,
        { transform: [{ scale: isCenter ? 1 : scaleValue }] },
      ]}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`${label} tab`}
      accessibilityState={{ selected: focused }}
    >
      <IconComponent
        name={iconName}
        size={isCenter ? 28 : 22}
        color={isCenter ? 'white' : focused ? '#1BD967' : '#888'}
      />
      {!isCenter && (
        <Text
          style={[styles.tabLabel, focused && styles.tabLabelFocused]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {label}
        </Text>
      )}
    </Animated.View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarItemStyle: {
          height: 65,
          alignItems: 'center',
          justifyContent: 'center',
        },
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
        component={Home} // Replace with your Calendar screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName={focused ? 'calendar' : 'calendar-outline'}
              label="Calendar"
              isCenter
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={Home} // Replace with your History screen
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
    paddingBottom: 0,
    paddingTop: 15,
    paddingHorizontal: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    width: 70,
    height: 55,
  },
  centerTabContainer: {
    backgroundColor: '#1BD967',
    borderWidth: 4,
    borderColor: 'white',
    width: 64,
    height: 64,
    borderRadius: 32,
    marginTop: -25,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  tabLabel: {
    fontSize: 11,
    fontFamily: 'Nunito',
    fontWeight: '600',
    color: '#888',
    marginTop: 3,
    textAlign: 'center',
    paddingHorizontal: 2,
  },
  tabLabelFocused: {
    color: '#1BD967',
    fontWeight: '700',
  },
});

export default BottomTabNavigator;

import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import Home from '../screens/home/Home';

const Tab = createBottomTabNavigator();

const CustomTabBarIcon = ({
  focused,
  iconName,
  label,
  isCenter = false,
  IconComponent = Ionicons,
}) => {
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (focused) {
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
          tabBarButton: ({
            onPress,
            accessibilityRole,
            accessibilityState,
            accessibilityLabel,
            children,
          }) => (
            <TouchableWithoutFeedback
              onPress={onPress}
              accessibilityRole={accessibilityRole}
              accessibilityState={accessibilityState}
              accessibilityLabel={accessibilityLabel}
            >
              <View>{children}</View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Tab.Screen
        name="Medicine"
        component={Home}
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
          tabBarButton: ({
            onPress,
            accessibilityRole,
            accessibilityState,
            accessibilityLabel,
            children,
          }) => (
            <TouchableWithoutFeedback
              onPress={onPress}
              accessibilityRole={accessibilityRole}
              accessibilityState={accessibilityState}
              accessibilityLabel={accessibilityLabel}
            >
              <View>{children}</View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Home}
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
          tabBarButton: ({
            onPress,
            accessibilityRole,
            accessibilityState,
            accessibilityLabel,
            children,
          }) => (
            <TouchableWithoutFeedback
              onPress={onPress}
              accessibilityRole={accessibilityRole}
              accessibilityState={accessibilityState}
              accessibilityLabel={accessibilityLabel}
            >
              <View>{children}</View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName={focused ? 'time' : 'time-outline'}
              label="History"
            />
          ),
          tabBarButton: ({
            onPress,
            accessibilityRole,
            accessibilityState,
            accessibilityLabel,
            children,
          }) => (
            <TouchableWithoutFeedback
              onPress={onPress}
              accessibilityRole={accessibilityRole}
              accessibilityState={accessibilityState}
              accessibilityLabel={accessibilityLabel}
            >
              <View>{children}</View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName={focused ? 'person' : 'person-outline'}
              label="Profile"
            />
          ),
          tabBarButton: ({
            onPress,
            accessibilityRole,
            accessibilityState,
            accessibilityLabel,
            children,
          }) => (
            <TouchableWithoutFeedback
              onPress={onPress}
              accessibilityRole={accessibilityRole}
              accessibilityState={accessibilityState}
              accessibilityLabel={accessibilityLabel}
            >
              <View>{children}</View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 65,
    backgroundColor: 'white',
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
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
    paddingVertical: 0,
    width: 60,
    height: 65,
  },
  centerTabContainer: {
    backgroundColor: '#1BD967',
    borderWidth: 4,
    borderColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 35,
    marginTop: -35,
    paddingVertical: 3,
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
    marginTop: 2,
    textAlign: 'center',
    paddingHorizontal: 2,
  },
  tabLabelFocused: {
    color: '#1BD967',
    fontWeight: '700',
  },
});
export default BottomTabNavigator;

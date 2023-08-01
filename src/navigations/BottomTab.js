import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { COLORS } from '../variables/Variables';
import {HomeIcon, MagnifyingGlassCircleIcon, CubeTransparentIcon, UserCircleIcon } from 'react-native-heroicons/solid';
import HomeStackNavigation from './HomeStackNavigation';
import SearchStackNavigation from './SearchStackNavigation';
import BlogStackNavigation from './BlogStackNavigation';
import ProfileStackNavigation from './ProfileStackNavigation';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
    initialRouteName="HomeTab"
    screenOptions={() => ({
        headerShown: false,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveBackgroundColor: COLORS.primary
    })}
    >
    <Tab.Screen name="HomeTab" component={HomeStackNavigation} options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <HomeIcon size="25" color="green" />
          ),
        }}/>

    <Tab.Screen name="SearchTab" component={SearchStackNavigation} options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <MagnifyingGlassCircleIcon  size="25"  color="green" />
          ),
        }} />
    <Tab.Screen name="BlogTab" component={BlogStackNavigation} options={{
          tabBarLabel: 'BLog',
          tabBarIcon: () => (
            <CubeTransparentIcon  size="25"  color="green" />
          ),
        }} />
      
      <Tab.Screen name="ProfileTab" component={ProfileStackNavigation} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <UserCircleIcon  size="25"  color="green" />
          ),
        }} />

  </Tab.Navigator>
  
  )
}

export default BottomTab
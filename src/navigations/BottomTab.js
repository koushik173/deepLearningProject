import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';


import { COLORS } from '../variables/Variables';

import {SparklesIcon, ShoppingCartIcon, HomeIcon, MagnifyingGlassCircleIcon, CubeTransparentIcon, UserCircleIcon } from 'react-native-heroicons/solid';
import SearchScreen from '../screens/SearchScreen';
import BlogScreen from '../screens/BlogScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/Home/HomeScreen';
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
    <Tab.Screen name="HomeTab" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <HomeIcon size="25" color="green" />
          ),
        }}/>

    <Tab.Screen name="SearchTab" component={SearchScreen} options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <MagnifyingGlassCircleIcon  size="25"  color="green" />
          ),
        }} />
    <Tab.Screen name="BlogTab" component={BlogScreen} options={{
          tabBarLabel: 'BLog',
          tabBarIcon: () => (
            <CubeTransparentIcon  size="25"  color="green" />
          ),
        }} />
      
      <Tab.Screen name="ProfileTab" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <UserCircleIcon  size="25"  color="green" />
          ),
        }} />

  </Tab.Navigator>
  
  )
}

export default BottomTab
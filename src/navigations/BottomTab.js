import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { COLORS } from '../variables/Variables';
import {HomeIcon, MagnifyingGlassCircleIcon, CubeTransparentIcon, UserCircleIcon } from 'react-native-heroicons/solid';
import HomeStackNavigation from './HomeStackNavigation';
import SearchStackNavigation from './SearchStackNavigation';
import BlogStackNavigation from './BlogStackNavigation';
import ProfileStackNavigation from './ProfileStackNavigation';
import { Image, Text } from 'react-native'
const Tab = createBottomTabNavigator();
 
const BottomTab = () => {
  return (
    <Tab.Navigator
    initialRouteName="HomeTab"
    screenOptions={() => ({
        headerShown: false,
        tabBarInactiveTintColor: "#1e1f1d",
        tabBarActiveTintColor: "#1e1f1d",
        tabBarInactiveBackgroundColor: "#5fde91"
    })}
    >
    <Tab.Screen name="HomeTab" component={HomeStackNavigation} options={{
          tabBarLabel:()=>(<Text className="font-bold text-black">Home</Text>) ,
          tabBarIcon: () => (
            <Image className="w-10 h-10 " source={require('../../Assets/images/home.png')} />
          ),
        }}/>

    <Tab.Screen name="SearchTab" component={SearchStackNavigation} options={{
          tabBarLabel:()=>(<Text className="font-bold text-black">Search</Text>) ,
          tabBarIcon: () => (
            <Image className="w-8 h-8" source={require('../../Assets/images/searchh.png')} />
          ),
        }} />
    <Tab.Screen name="BlogTab" component={BlogStackNavigation} options={{
          tabBarLabel:()=>(<Text className="font-bold text-black">Blog</Text>) ,
          tabBarIcon: () => (
            <Image className="w-10 h-10 top-1" source={require('../../Assets/images/blogg.png')} />
          ),
        }} />
      
      <Tab.Screen name="ProfileTab" component={ProfileStackNavigation} options={{
          tabBarLabel:()=>(<Text className="font-bold text-black">Profile</Text>),
          tabBarIcon: () => (
            <Image className="w-8 h-8" source={require('../../Assets/images/profile.png')} />
          ),
        }} />

  </Tab.Navigator>
  
  )
}

export default BottomTab
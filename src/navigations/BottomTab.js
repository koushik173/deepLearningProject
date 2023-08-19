import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStackNavigation from './HomeStackNavigation';
import SearchStackNavigation from './SearchStackNavigation';
import ProfileStackNavigation from './ProfileStackNavigation';
import { Image, Text } from 'react-native'
import LearnStackNavigator from './LearnStackNavigator';
import Learn from '../screens/Learn/Learn';
import UserProfile from '../screens/profile/UserProfile';
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
    <Tab.Screen name="Learn" component={Learn} options={{
          tabBarLabel:()=>(<Text className="font-bold text-black">Learn</Text>) ,
          tabBarIcon: () => (
            <Image className="w-10 h-10 top-1" source={require('../../Assets/images/blogg.png')} />
          ),
        }} />
      
      <Tab.Screen name="Profile" component={UserProfile} options={{
          tabBarLabel:()=>(<Text className="font-bold text-black">Profile</Text>),
          tabBarIcon: () => (
            <Image className="w-8 h-8" source={require('../../Assets/images/profile.png')} />
          ),
        }} />

  </Tab.Navigator>
  
  )
}

export default BottomTab
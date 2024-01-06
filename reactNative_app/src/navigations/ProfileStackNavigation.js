import React from 'react';
import UserProfile from '../screens/profile/UserProfile';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const ProfileStack = createNativeStackNavigator();
const ProfileStackNavigation = () => {
  return (
    <ProfileStack.Navigator initialRouteName='UserProfile' screenOptions={{
        headerShown: false
    }}>
        <ProfileStack.Screen name='UserProfile' component={UserProfile} />
    </ProfileStack.Navigator>
  )
}

export default ProfileStackNavigation
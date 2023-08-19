import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Learn from '../screens/Learn/Learn';
const LearnStack = createNativeStackNavigator();
const LearnStackNavigator = () => {
  return (
    <LearnStack.Navigator initialRouteName='Learn' screenOptions={{
        headerShown: false
    }}>
        <LearnStack.Screen name='Learn' component={Learn} />
    </LearnStack.Navigator>
  )
}

export default LearnStackNavigator
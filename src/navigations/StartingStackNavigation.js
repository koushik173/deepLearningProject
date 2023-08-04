import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from '../screens/starting/OnboardingScreen'
import WelcomeScreen from '../screens/starting/WelcomeScreen'
import SignUpScreen from '../screens/starting/SignUpScreen'
import LoginScreen from '../screens/starting/LoginScreen'

const StartingStack = createNativeStackNavigator()

const StartingStackNavigation = () => {
  return (
    <StartingStack.Navigator screenOptions={{
        headerShown: false
      }}>
          <StartingStack.Screen name='Onboarding' component={OnboardingScreen}/>
            <StartingStack.Screen name='Welcome' component={WelcomeScreen}/>
            <StartingStack.Screen name='SignUp' component={SignUpScreen}/>
            <StartingStack.Screen name='Login' component={LoginScreen}/>
      </StartingStack.Navigator>
  )
}

export default StartingStackNavigation
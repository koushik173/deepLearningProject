import React from 'react'
import{NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator}from "@react-navigation/native-stack";
import OnboardingScreen from '../screens/OnboardingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack=createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
            <Stack.Screen name='Onboarding'options={{headerShown:false}} component={OnboardingScreen}/>
            <Stack.Screen name='Welcome'options={{headerShown:false}} component={WelcomeScreen}/>
            <Stack.Screen name='SignUp'options={{headerShown:false}} component={SignUpScreen}/>
            <Stack.Screen name='Login'options={{headerShown:false}} component={LoginScreen}/>
            <Stack.Screen name={"Home"}options={{headerShown:false}} component={HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
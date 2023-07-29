import React from 'react'
import{NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator}from "@react-navigation/native-stack";
import OnboardingScreen from '../screens/OnboardingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomTab from './BottomTab';
import Notifications from '../screens/Notifications';
import TrackDisases from '../screens/trackDiseases/TrackDisases';
import Consultation from '../screens/consultation/Consultation';
import ProminenTinfection from '../screens/prominenTInfection/ProminenTinfection';
import GreenDiscover from '../screens/greenDiscover/GreenDiscover';
import PlantRecomend from '../screens/plantQuest/PlantRecomend';
import PlantTypes from '../screens/plantQuest/PlantTypes';
import About from '../screens/Discover/About';
import Blog from '../screens/Discover/Blog';
import Learn from '../screens/Discover/Learn';


const Stack=createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
            <Stack.Screen name='Onboarding'options={{headerShown:false}} component={OnboardingScreen}/>
            <Stack.Screen name='Welcome'options={{headerShown:false}} component={WelcomeScreen}/>
            <Stack.Screen name='SignUp'options={{headerShown:false}} component={SignUpScreen}/>
            <Stack.Screen name='Login'options={{headerShown:false}} component={LoginScreen}/>

            <Stack.Screen name='Home' options={{headerShown:false}} component={BottomTab}/>

            <Stack.Screen name='Notification' options={{headerShown:false}} component={Notifications}/>
            <Stack.Screen name='TrackDiseases' options={{headerShown:false}} component={TrackDisases}/>
            <Stack.Screen name='ProminenTinfection' options={{headerShown:false}} component={ProminenTinfection}/>
            <Stack.Screen name='Consultation' options={{headerShown:false}} component={Consultation}/>
            <Stack.Screen name='GreenDiscover' options={{headerShown:false}} component={GreenDiscover}/>
            <Stack.Screen name='PlantRecomend' options={{headerShown:false}} component={PlantRecomend}/>
            <Stack.Screen name='PlantTypes' options={{headerShown:false}} component={PlantTypes}/>
            <Stack.Screen name='Learn' options={{headerShown:false}} component={Learn}/>
            <Stack.Screen name='Blog' options={{headerShown:false}} component={Blog}/>
            <Stack.Screen name='About' options={{headerShown:false}} component={About}/> 


           
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
import React from 'react'
import{NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator}from "@react-navigation/native-stack";

import BottomTab from './BottomTab';
import StartingStackNavigation from './StartingStackNavigation';

const Stack=createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Starting'>
          <Stack.Screen name='Starting' options={{headerShown:false}} component={StartingStackNavigation}/>
          <Stack.Screen name='Home' options={{headerShown:false}} component={BottomTab}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
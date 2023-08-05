import React, { useContext, useEffect, useState } from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator}from "@react-navigation/native-stack";
import auth from '@react-native-firebase/auth';
import BottomTab from './BottomTab';
import StartingStackNavigation from './StartingStackNavigation';
import { AuthContext } from '../components/Auth/AuthProvider';

const Stack=createNativeStackNavigator();

const AppNavigation = () => {
   // Set an initializing state whilst Firebase connects
   const [initializing, setInitializing] = useState(true);
   const {setUser,user} = useContext(AuthContext);
   

   // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    setUser(false)
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Starting'>
          {
            (user && user.emailVerified)?<Stack.Screen name='Home' options={{headerShown:false}} component={BottomTab}/>:
          <Stack.Screen name='Starting' options={{headerShown:false}} component={StartingStackNavigation}/>
          }
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProminenTinfection from '../screens/Home/prominenTInfection/ProminenTinfection';

const SearchStack = createNativeStackNavigator();

const SearchStackNavigation = () => {
  return (
    <SearchStack.Navigator initialRouteName='ProminenTinfection' screenOptions={{
        headerShown: false
    }}>
        <SearchStack.Screen name='ProminenTinfection' component={ProminenTinfection} />
    </SearchStack.Navigator>
) 
}

export default SearchStackNavigation
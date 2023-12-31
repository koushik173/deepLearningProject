import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/Home/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TrackDisases from '../screens/Home/trackDiseases/TrackDisases';
import Consultation from '../screens/Home/consultation/Consultation';
import PlantRecomend from '../screens/Home/plantQuest/PlantRecomend';
import About from '../screens/Home/Discover/About';
import TopDiseases from '../screens/Home/prominenTInfection/TopDiseases';
import VegFreshness from '../screens/Home/plantQuest/VegFreshNess';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigation = () => {
    return (
        <HomeStack.Navigator initialRouteName='HomeScreen' screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name='HomeScreen' component={HomeScreen} />
            <HomeStack.Screen name='TrackDiseases' component={TrackDisases} />
            <HomeStack.Screen name='TopDiseases' component={TopDiseases} />
            <HomeStack.Screen name='Consultation' component={Consultation} />
            <HomeStack.Screen name='PlantRecomend' component={PlantRecomend} />
            <HomeStack.Screen name='VegFreshness' component={VegFreshness} />
            <HomeStack.Screen name='About' component={About} />
        </HomeStack.Navigator>
    ) 
}

export default HomeStackNavigation
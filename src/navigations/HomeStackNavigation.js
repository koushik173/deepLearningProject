import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/Home/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TrackDisases from '../screens/Home/trackDiseases/TrackDisases';
import ProminenTinfection from '../screens/Home/prominenTInfection/ProminenTinfection';
import Consultation from '../screens/Home/consultation/Consultation';
import PlantRecomend from '../screens/Home/plantQuest/PlantRecomend';
import PlantTypes from '../screens/Home/plantQuest/PlantTypes';
import Learn from '../screens/Home/Discover/Learn';
import Blog from '../screens/Home/Discover/Blog';
import About from '../screens/Home/Discover/About';
import TopDiseases from '../screens/Home/prominenTInfection/TopDiseases';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigation = () => {
    return (
        <HomeStack.Navigator initialRouteName='HomeScreen' screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name='HomeScreen' component={HomeScreen} />
            <HomeStack.Screen name='TrackDiseases' component={TrackDisases} />
            <HomeStack.Screen name='ProminenTinfection' component={ProminenTinfection} />
            <HomeStack.Screen name='TopDiseases' component={TopDiseases} />
            <HomeStack.Screen name='Consultation' component={Consultation} />
            <HomeStack.Screen name='PlantRecomend' component={PlantRecomend} />
            <HomeStack.Screen name='PlantTypes' component={PlantTypes} />
            <HomeStack.Screen name='Learn' component={Learn} />
            <HomeStack.Screen name='Blog' component={Blog} />
            <HomeStack.Screen name='About' component={About} />
        </HomeStack.Navigator>
    )
}

export default HomeStackNavigation
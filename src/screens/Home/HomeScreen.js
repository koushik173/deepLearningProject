import { View, Text , ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './Navbar';
import TopRightArt from './TopRightArt';
import CheckPlantArea from './CheckPlantArea';
import CommonDiseases from './CommonDiseases';
import PlantExpert from './PlantExpert';
import PlantRecomendation from './PlantRecomendation';
const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-orange-100 ">
      <Navbar></Navbar>
      <TopRightArt></TopRightArt>

      <ScrollView>
        <CheckPlantArea></CheckPlantArea>
        <CommonDiseases></CommonDiseases>
        <PlantExpert></PlantExpert>
        <PlantRecomendation></PlantRecomendation>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
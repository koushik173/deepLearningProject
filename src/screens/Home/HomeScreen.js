import { View, Text , ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './Navbar';
import TopRightArt from './TopRightArt';
import CheckPlantArea from './CheckPlantArea';
import CommonDiseasesArea from './CommonDiseasesArea';
import PlantExpertArea from './PlantExpertArea';
import PlantRecomendArea from './PlantRecomendArea';
import PlantTypesArea from './PlantTypesArea';
import GreenDiscoverArea from './GreenDiscoverArea';

// import GreenDiscoverArea from './GreenDiscoverArea';
const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-orange-100 ">
      <Navbar></Navbar>
      <TopRightArt></TopRightArt>

      <ScrollView>
        <CheckPlantArea></CheckPlantArea>
        <CommonDiseasesArea></CommonDiseasesArea>
        <PlantExpertArea></PlantExpertArea>
        <PlantRecomendArea></PlantRecomendArea>
        <PlantTypesArea></PlantTypesArea>
        <GreenDiscoverArea></GreenDiscoverArea>


        {/* <GreenDiscoverArea></GreenDiscoverArea> */}

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
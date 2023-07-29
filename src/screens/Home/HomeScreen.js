import { View, Text , ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './Navbar';
import TopRightArt from './TopRightArt';
import CheckPlantArea from './CheckPlantArea';
import CommonDiseasesArea from './CommonDiseasesArea';
import PlantExpertArea from './PlantExpertArea';
import GreenDiscoverArea from './GreenDiscoverArea';
import PlantQuestArea from './PlantQuestArea';
import Footer from './Footer';

// import GreenDiscoverArea from './GreenDiscoverArea';
const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-green-50 ">
      <Navbar></Navbar>
      <TopRightArt></TopRightArt>

      <ScrollView>
        <CheckPlantArea></CheckPlantArea>
        <CommonDiseasesArea></CommonDiseasesArea>
        <PlantExpertArea></PlantExpertArea>

        <PlantQuestArea></PlantQuestArea>
        <GreenDiscoverArea></GreenDiscoverArea>
        <Footer></Footer>
      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen
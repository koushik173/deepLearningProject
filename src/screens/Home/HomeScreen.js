import { View , ScrollView} from 'react-native'
import React  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './navbar/Navbar';
import TopRightArt from './TopRightArt';

import CommonDiseasesArea from './prominenTInfection/CommonDiseasesArea';
import PlantExpertArea from './consultation/PlantExpertArea';
import GreenDiscoverArea from './Discover/GreenDiscoverArea';
import PlantQuestArea from './plantQuest/PlantQuestArea';
import Footer from './Footer';
import CarePlantArea from './trackDiseases/CheckPlantArea';

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white ml-2">
      
      <Navbar></Navbar>
      <TopRightArt></TopRightArt>

      <ScrollView>
        <CarePlantArea></CarePlantArea>
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
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TopDisContext } from '../../../components/Auth/TopDisProvider'
import GoBack from '../../../components/GoBack';

const TopDiseases = () => {
    const {selectTopDis} = useContext(TopDisContext);
    const {
        name,
        introduction,
        causes_and_symptoms,
        understanding_lifecycle_spread,
        preventive_measures,
        cultural_practices_protection,
        exploring_resistant_varieties,
        when_fungicides_come,
        organic_approaches,
        real_life_success_story,
        conclusion,
        references_and_resources,
        photo
      } = selectTopDis
  return (
    <SafeAreaView>
      <ImageBackground className="w-full h-full " source={require('../../../../Assets/images/bgTrack.jpg')} resizeMode="cover">
        <GoBack></GoBack>
        <Text className="mt-2 bg-green-700 text-2xl text-white font-bold text-center">{name.replace(/_/g, ' ')}</Text>
        <Image className="mt-2 w-full h-64" source={{ uri: photo }} />
        <View >
          <View className=" w-full h-full bg-white opacity-50  absolute" />
          <ScrollView className="p-3 mb-72">
           
            <Text className="text-black font-bold ">{introduction}</Text>

            <Text className="text-black font-bold text-xl">Causes and symptoms </Text>
            <Text className="text-black font-bold">{causes_and_symptoms}</Text>

            <Text className="text-black font-bold text-xl">Understanding Lifecycle Spread</Text>
            <Text className="text-black font-bold">{understanding_lifecycle_spread}</Text>

            <Text className="text-black font-bold text-xl">Preventive Measures</Text>
            <Text className="text-black font-bold">{preventive_measures}</Text>

            <Text className="text-black font-bold text-xl">Cultural Practices Protection</Text>
            <Text className="text-black font-bold">{cultural_practices_protection}</Text>

            <Text className="text-black font-bold text-xl">Exploring Resistant Varieties</Text>
            <Text className="text-black font-bold">{exploring_resistant_varieties}</Text>

            <Text className="text-black font-bold text-xl">When Fungicides Come</Text>
            <Text className="text-black font-bold">{when_fungicides_come}</Text>

            <Text className="text-black font-bold text-xl">Organic Approaches</Text>
            <Text className="text-black font-bold">{organic_approaches}</Text>

            <Text className="text-black font-bold text-xl">Real Life Success Story</Text>
            <Text className="text-black font-bold">{real_life_success_story}</Text>

            <Text className="text-black font-bold text-xl">Conclusion</Text>
            <Text className="text-black font-bold">{conclusion}</Text>

            <Text className="text-black font-bold text-xl">References And Resources</Text>
            <Text className="text-black font-bold">{references_and_resources}</Text>
            <Text className="mt-16"></Text>
          </ScrollView>
        </View>


      </ImageBackground>
    </SafeAreaView>
  )
}

export default TopDiseases
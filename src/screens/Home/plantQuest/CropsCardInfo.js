import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context';

const CropsCardInfo = (props) => {
    const {
        Crops,
        Site_Selection,
        Soil_Preparation,
        Seed_Selection_Preparation,
        Seedbed_Preparation,
        Transplanting,
        Irrigation,
        Fertilization,
        Weed_Pest_Management,
        Disease_Management,
        Harvesting,
        Threshing_Processin,
        photo
    } = props.selectCrops

    const handleBack = () => {
        props.setSelectCrops(false)
    }
    return (
        <SafeAreaView>
            <View className="flex-row justify-start">
                <TouchableOpacity
                    onPress={() => handleBack()}
                    className="bg-green-800 h-8 w-16 rounded-tr-2xl rounded-bl-2xl ml-2 mt-2 items-center justify-center"
                >
                    <ArrowLeftIcon size="35" color="white" />
                </TouchableOpacity>
            </View>
            <Text className="mt-2 bg-green-700 text-2xl text-white font-bold text-center">{Crops}</Text>
            <Image className="mt-2 w-full h-64" source={{ uri: photo }} />
            <View >
                <View className=" w-full h-full bg-white opacity-50  absolute" />
                <ScrollView className="p-3 mb-72">

                    <Text className="text-green-950 font-bold text-xl">Site Selection: </Text>
                    <Text className="text-black font-bold ">{Site_Selection}</Text>

                    <Text className="text-green-950 font-bold text-xl">Soil Preparation: </Text>
                    <Text className="text-black font-bold">{Soil_Preparation}</Text>

                    <Text className="text-green-950 font-bold text-xl">Seed Selection Preparation: </Text>
                    <Text className="text-black font-bold">{Seed_Selection_Preparation}</Text>

                    <Text className="text-green-950 font-bold text-xl">Seedbed Preparation: </Text>
                    <Text className="text-black font-bold">{Seedbed_Preparation}</Text>

                    <Text className="text-green-950 font-bold text-xl">Transplanting: </Text>
                    <Text className="text-black font-bold">{Transplanting}</Text>

                    <Text className="text-green-950 font-bold text-xl">Irrigation: </Text>
                    <Text className="text-black font-bold">{Irrigation}</Text>

                    <Text className="text-green-950 font-bold text-xl">Fertilization: </Text>
                    <Text className="text-black font-bold">{Fertilization}</Text>

                    <Text className="text-green-950 font-bold text-xl">Weed Pest Managemen: </Text>
                    <Text className="text-black font-bold">{Weed_Pest_Management}</Text>

                    <Text className="text-green-950 font-bold text-xl">Disease Management: </Text>
                    <Text className="text-black font-bold">{Disease_Management}</Text>

                    <Text className="text-green-950 font-bold text-xl">Harvesting: </Text>
                    <Text className="text-black font-bold">{Harvesting}</Text>

                    <Text className="text-green-950 font-bold text-xl">Threshing Processin: </Text>
                    <Text className="text-black font-bold">{Threshing_Processin}</Text>
                    
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default CropsCardInfo
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowRightIcon } from 'react-native-heroicons/solid';

const PlantRecomendArea = () => {
    const navigation = useNavigation();
    return ( 
        <View className="mt-4">
            <Text className="text-2xl font-bold text-cyan-600 mb-5 ">Plants Quest : </Text>
            <View className="flex flex-row">
                <Image className="w-48 h-48 -top-6 -left-4" source={require('../../../Assets/images/recomendation.png')} />
                <View className="rounded-3xl w-full h-36 mt-2 bg-cyan-600">
                    <View className="p-3 ml-2">
                        <Text className="text-xl font-bold text-white ">Gets Your </Text>
                        <View className="flex flex-row items-center">
                            <Text className="text-xl font-bold text-white ">Ideal plant</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('PlantRecomend')}
                                className="bg-green-400 w-12 mt-2 h-7 p-1 items-center rounded-tr-2xl rounded-bl-2xl ml-5"
                            >
                                <ArrowRightIcon size="20" color="white" />
                            </TouchableOpacity>
                        </View>
                        <Text className="text-sm  font-bold text-black-50 w-48">To get specific suggestions provide the nutrient-environment factors.</Text>
                    </View>
                </View> 
            </View>


        </View>
    )
}

export default PlantRecomendArea

// Nitrogen	phosphorus	potassium	temperature	humidity	ph	rainfall
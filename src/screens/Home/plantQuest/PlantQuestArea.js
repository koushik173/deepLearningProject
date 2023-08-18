import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowRightIcon } from 'react-native-heroicons/solid';

const PlantQuestArea = () => {
    const navigation = useNavigation();
    return (
        <View className="mt-4">
            <Text className="text-2xl font-bold text-cyan-600 mb-5 ">Plants Quest : </Text>

            <View className="flex flex-row">
                <Image className="w-48 h-48 -top-6 -left-4" source={require('../../../../Assets/images/scanpic.png')} />
                <View className="rounded-3xl w-full h-36 mt-2 bg-cyan-600">
                    <View className="p-3 ml-2">
                        <Text className="text-xl font-bold text-white ">Gets Your </Text>
                        <View className="flex flex-row items-center">
                            <Text className="text-xl font-bold text-white ">Ideal plant</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('PlantRecomend')}
                                className="bg-cyan-900 w-20  h-7 items-center rounded-tr-2xl rounded-bl-2xl ml-2"
                            >
                                <ArrowRightIcon size="28" color="white" />
                            </TouchableOpacity>
                        </View>
                        <Text className="text-sm  font-bold text-black-50 w-48">To get specific suggestions provide the nutrient-environment factors.</Text>
                    </View>
                </View>
            </View>

            <View className="flex flex-row">
                <View className="rounded-3xl w-56 -left-6 h-36  bg-cyan-600">
                    <View className="p-2 ml-6">
                        <Text className="text-xl font-bold text-white ">Determine Veg</Text>
                        <View className="flex flex-row items-center">
                            <Text className="text-xl font-bold text-white ">Freshness</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("VegFreshness")}
                                className="bg-cyan-900 w-20 mt-2 h-7 ml-1 items-center rounded-tr-2xl rounded-bl-2xl "
                            >
                                <ArrowRightIcon size="28" color="white" />
                            </TouchableOpacity>
                        </View>
                        <Text className="text-sm  font-bold text-black-50 w-48">Quickly determine the freshness of fruits, flowers, and vegetables.</Text>
                    </View>
                </View>
                <Image className="w-48 h-48 -top-8" source={require('../../../../Assets/images/plantTypes.png')} />
            </View>

            <View className="flex justify-center items-center">
                <View className="bg-cyan-600 w-56 h-16 -left-4 rounded-tr-3xl rounded-bl-3xl flex flex-row">
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Seeding')}
                        className="bg-cyan-900 w-24 h-8 mt-4 ml-3 justify-center rounded-full "
                    >
                        <Text className="font-bold text-center text-xs text-white">Find Seedling</Text>
                    </TouchableOpacity>
                    <View>
                        <Image className="w-28 h-32 ml-1 -top-16" source={require('../../../../Assets/images/chilli.png')} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PlantQuestArea
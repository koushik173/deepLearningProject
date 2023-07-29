import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, ArrowRightCircleIcon, ArrowRightIcon, ArrowSmallRightIcon } from 'react-native-heroicons/solid';

const PlantRecomendArea = () => {
    const navigation = useNavigation();
    return (
        <View className="">
            <View className="flex flex-row">
                <View className="rounded-3xl w-56 -left-6 h-36  bg-cyan-600">
                    <View className="p-2 ml-6">
                        <Text className="text-xl font-bold text-white ">Catalog of plant</Text>
                        <View className="flex flex-row items-center">
                            <Text className="text-xl font-bold text-white ">variety</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('PlantTypes')}
                                className="bg-green-400 w-12 mt-2 h-7 p-1 items-center rounded-tr-2xl rounded-bl-2xl ml-5"
                            >
                                <ArrowRightIcon size="20" color="white" />
                            </TouchableOpacity>
                        </View>
                        <Text className="text-sm  font-bold text-black-50 w-48">Figure out various types of plants, such as fruits, flowers, and vegetables.</Text>
                    </View>
                </View>
                <Image className="w-48 h-48 -top-8" source={require('../../../Assets/images/plantTypes.png')} />
            </View>


        </View>
    )
}

export default PlantRecomendArea
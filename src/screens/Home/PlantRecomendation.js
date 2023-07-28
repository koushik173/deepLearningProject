import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const PlantRecomendation = () => {
    const navigation = useNavigation();
    return (
        <View className="mt-4">
            <Text className="text-2xl font-bold text-cyan-600 mb-5 ">Plants Quest : </Text>
            <View className="flex flex-row">
                <Image className="w-48 h-48 -top-6 -left-4" source={require('../../../Assets/images/recomendation.png')} />
                <TouchableOpacity onPress={() => navigation.navigate('GreenDiscover')}
                className="rounded-3xl w-full h-36 mt-2 bg-cyan-600">
                    <View className="p-5">
                        <Text className="text-2xl font-bold text-white ">Lets Green</Text>
                        <Text className="text-xl font-bold text-white ">Discover</Text>
                        <Text className="text-sm  font-bold text-black-50 w-44">Learn how to assist your ailing plants.</Text>
                    </View>

                </TouchableOpacity> 
            </View>


        </View>
    )
}

export default PlantRecomendation
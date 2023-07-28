import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CheckPlantArea = () => {
    const navigation = useNavigation();
  return (
    <View>
        <View className="flex flex-row">
            <Image className="w-52 h-44 -left-6 mt-2" source={require('../../../Assets/images/bananaLeaf.png')} />
            <View className="-left-8 mt-8 w-56">
                <Text className="text-3xl -left-2 font-bold text-green-700">Care Your Plant</Text>
                <Text className="text-base mt-2  font-bold text-gray-700">snap picture,diagnose disease, and learn about care</Text>
            </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('TrackDiseases')} 
            className="w-96 h-20 rounded-full -top-12 ml-4  shadow-lg shadow-green-600 ">
            <Text className="text-xl font-bold text-center mt-6 text-green-800">Let's Track</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CheckPlantArea
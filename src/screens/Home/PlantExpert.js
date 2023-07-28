import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const PlantExpert = () => {
    const navigation = useNavigation();
    return (
        <View className="h-44">
            <View className="w-full h-40 rounded-full  shadow-lg shadow-green-600 ">
                <View className="flex flex-row">
                    <View className="p-7 ml-3">
                        <Text className="text-xl font-bold text-green-800 ">Consult Specialists</Text>
                        <Text className="text-sm  font-bold text-black-50 w-44">Learn how to assist your ailing plants.</Text>
                        
                        <TouchableOpacity className="p-2 mt-2 bg-green-800 rounded-xl" onPress={() => navigation.navigate('Consultation')}>
                            <Text className="font-xl font-bold text-center text-green-100">
                                Get Consultation
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image className="w-40 h-36 -left-6" source={require('../../../Assets/images/consultant.png')} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PlantExpert
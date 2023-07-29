import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
const GoBack = () => {
    const navigation = useNavigation();
    return (
        <View className="flex-row justify-start">
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="bg-green-300 h-8 w-16 rounded-tr-2xl rounded-bl-2xl ml-2 mt-2 items-center justify-center"
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default GoBack
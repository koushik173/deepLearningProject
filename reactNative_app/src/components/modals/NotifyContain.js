import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const NotifyContain = () => {
    return (
        <TouchableOpacity className="p-1 mb-2">
            <View className="w-full h-12 bg-blue-200 rounded-3xl">
                <View className="flex flex-row">
                    <Image className="w-10 h-10 bg-blue-300 rounded-full" source={require('../../../Assets/images/avaterUser.png')} />
                    <View className="mt-1 ml-2">
                        <Text className="text-black font-bold">New Contains Added! Lets see</Text>
                        <Text className="text-black-100 text-bold text-xs italic">a fiew moments ago</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default NotifyContain
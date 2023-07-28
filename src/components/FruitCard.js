import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const FruitCard = ({fruit}) => {
    
  return (
    <TouchableOpacity className="mx-5 w-60 h-72 p-5 rounded-3xl" style={{ backgroundColor: fruit.color(1)}}>
        <View className="flex-row justify-center ">
            <Image className="w-52 h-44" source={fruit.image} />
        </View>
        <View className="ml-4 my-4">
            <Text className="font-bold text-xl text-white shadow">{fruit.name}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default FruitCard
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const FruitCard = ({fruit}) => {
    
  return (
    <TouchableOpacity className="mx-2 w-36 h-20 mt-14 p-3 rounded-3xl" style={{ backgroundColor: fruit.color(1)}}>
        <View className="-top-16">
            <Image className="w-24 h-24" source={fruit.image} />
            <Text className="font-bold text-black shadow text-center">{fruit.name}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default FruitCard
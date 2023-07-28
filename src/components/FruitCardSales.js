import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const FruitCardSales = ({fruit}) => {
  return (
    <View className="mr-6">
        <TouchableOpacity  className="flex-row justify-center -mb-9 shadow-lg z-20" >
        <Image source={fruit.image} style={{height: 65,width: 65,  shadowColor: fruit.shadow,
            overflow: 'visible',
            shadowRadius: 15,
            shadowOffset: {width: 0, height: 20},
            shadowOpacity: 0.4,
            }} />
        </TouchableOpacity>
        
        <View className="rounded-3xl flex justify-end items-center w-20 h-20" style={{backgroundColor: fruit.color(0.4)}}>
            <Text className="font-bold text-center text-black pb-3">$ {fruit.price}</Text>
        </View>

    </View>
    
  )
}

export default FruitCardSales
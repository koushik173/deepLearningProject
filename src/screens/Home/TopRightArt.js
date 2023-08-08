import { View, Text } from 'react-native'
import React from 'react'

const TopRightArt = () => {
  return (
    <View className="z-0 absolute ml-12 mt-2">
        <View className="flex justify-center items-center">
          <View className="relative mt-10 mr-64 ">
            <View className="opacity-50 h-96 w-80 bg-green-300 rounded-full absolute transform rotate-45 bottom-0 left-0"></View>
          </View>
        </View>
        <View className="flex justify-center items-center">
          <View className="relative mt-8 ml-16 ">
            <View className="opacity-50 h-64 w-72 bg-green-300 rounded-full absolute transform rotate-45 bottom-0 left-0"></View>
          </View>
        </View>
      </View>
  )
}

export default TopRightArt
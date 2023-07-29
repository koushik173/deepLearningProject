import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GreenDiscoverArea = () => {
  const navigation = useNavigation();
  return (
    <View className="mt-5">
      <Text className="text-2xl font-bold text-blue-600 mb-5 ">Green Discover: </Text>
        <View className="w-full h-24 rounded-full  shadow-lg shadow-blue-600 -top-2">
          <View className="flex flex-row justify-evenly items-center ">
            <TouchableOpacity onPress={() => navigation.navigate('Learn')} className="bg-green-700 opacity-90 w-32 h-12 p-1  items-center rounded-tr-3xl rounded-bl-3xl">
              <Text className="text-3xl font-bold text-white ">Learn</Text>
            </TouchableOpacity>
            <Image className="w-28 h-28 -top-2" source={require('../../../Assets/images/learning.png')} />
          </View>
        </View>

        <View className="w-full h-24 rounded-full  shadow-lg shadow-blue-600">
          <View className="flex flex-row justify-evenly items-center ">
            <TouchableOpacity onPress={() => navigation.navigate('Blog')} 
            className="bg-green-700 opacity-90 w-32 h-12 p-1  items-center rounded-tr-3xl rounded-bl-3xl">
              <Text className="text-3xl font-bold text-white ">Blog</Text>
            </TouchableOpacity>
            <Image className="w-28 h-28 -top-2" source={require('../../../Assets/images/blog.png')} />
          </View>
        </View>

        <View className="w-full h-24 rounded-full  shadow-lg shadow-blue-600 mt-2">
          <View className="flex flex-row justify-evenly items-center mt-3">
            <TouchableOpacity onPress={() => navigation.navigate('About')} className="bg-green-700 opacity-90 w-32 h-12 p-1  items-center rounded-tr-3xl rounded-bl-3xl">
              <Text className="text-3xl font-bold text-white ">About</Text>
            </TouchableOpacity>
            <Image className="w-24 h-24 -top-2" source={require('../../../Assets/images/about.png')} />
          </View>
        </View>
    </View>

      
  )
}

export default GreenDiscoverArea
import { View, Text, ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'

const Loading = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="bg-[#5fde91] w-full h-full flex-row justify-center items-center">
       <ActivityIndicator size="extra-large" color="#fff" />
       <Text className="text-blackwhite font-bold">Loading...</Text>
    </View>

  )
}

export default Loading
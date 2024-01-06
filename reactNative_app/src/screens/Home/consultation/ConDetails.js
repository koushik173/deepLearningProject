import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'

const ConDetails = (props) => {
    const {name, photo, types, specialization, practice, location, email}=props.selectAgrRst
    const handleBack=()=>{
        props.setSelectAgrRst(false)
    }
    const handleAlert=(message, type)=>{
      Alert.alert(type, message, [
        { text: 'OK', style: 'cancel' },
      ]);
    }
  return (
    <View>
      <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => handleBack()}
            className="bg-green-800 h-8 w-16 rounded-tr-2xl rounded-bl-2xl ml-2 mt-2 items-center justify-center"
          >
            <ArrowLeftIcon size="35" color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <View className="rounded-tl-[120px] rounded-br-[120px] bg-white w-full h-[500px] absolute opacity-80 top-32" />
          <View className="ml-5">
            <View className="flex-row">
              <Image className="w-56 h-56 mt-5" source={{ uri: photo }} />
              <View className="flex-row bg-green-200 rounded-xl w-28 h-14 top-44 left-5 gap-2">
              <TouchableOpacity onPress={()=>handleAlert(email,"Email:")}><Image className="w-10 h-10" source={require('../../../../Assets/images/email.png')} /></TouchableOpacity>
              <TouchableOpacity onPress={()=>handleAlert("+01-654644564","Phone:")}><Image className="w-10 h-10 top-1" source={require('../../../../Assets/images/call.png')} /></TouchableOpacity>
              </View>
            </View>
            <Text className="font-bold text-black text-xl">{name}</Text>
            <Text className="text-black">{types}</Text>
            <Text className="text-black mt-2">{specialization}</Text>
            <Text className="text-black font-bold text-xl mt-8">Location:</Text>
            <View className="flex-row">
              <Image className="w-56 h-56 -top-12" source={require('../../../../Assets/images/map.png')} />
              <View className="mt-2">
                <View className="flex-row w-32">
                 <Image className="w-8 h-8" source={require('../../../../Assets/images/location.png')} />
                 <Text className="font-bold ml-2 -top-1">{location}</Text>
                </View>
                <View className="flex-row w-32 mt-2">
                <Image className="w-8 h-8" source={require('../../../../Assets/images/calender.png')} />
                 <Text className="font-bold ml-2 mt-1">Monday-Friday</Text>
                </View>
                <View className="flex-row w-32 mt-2">
                <Image className="w-8 h-8" source={require('../../../../Assets/images/clock.png')} />
                 <Text className="font-bold ml-2 mt-1">9am - 7pm</Text>
                </View>
              </View>
            </View>
          </View>
          
        </View>
    </View>
  )
}

export default ConDetails
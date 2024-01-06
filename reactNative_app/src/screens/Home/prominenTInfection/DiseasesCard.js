import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'

const DiseasesCard = (props) => {
  const {name, photo} =props.diseases
  
  const handleSelectPhoto=(dis)=>{
    props.setSelectDis(dis)
  }
  return (
    <View>
      <TouchableOpacity onPress={()=>handleSelectPhoto(props.diseases)} className="items-center  m-2 w-28 h-28 p-2 rounded-3xl">
              <ImageBackground source={{ uri: photo }} className='rounded-tr-2xl rounded-2xl w-28 h-28 bg-gray-50 absolute'></ImageBackground>
              <View className=" w-28 h-12 top-12 mt-1 bg-white opacity-60" />
              <Text className="font-bold text-xs text-black shadow text-center">{name.replace(/_/g, ' ')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DiseasesCard
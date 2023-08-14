import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const CropsCard = (props) => {
    const {Crops, photo} =props.cropsdata
  
    const handleSelectCrops=(crop)=>{
      props.setSelectCrops(crop)
    }
    return (
      <View>
        <TouchableOpacity onPress={()=>handleSelectCrops(props.cropsdata)} className="items-center  m-2 w-28 h-28 p-2 rounded-3xl">
                <ImageBackground source={{ uri: photo }} className='rounded-tr-2xl rounded-2xl w-28 h-28  absolute'></ImageBackground>
                <View className=" w-28 h-8 top-16 mt-1 bg-white opacity-60" />
                <Text className="font-bold top-8 text-base text-black shadow text-center">{Crops}</Text>
        </TouchableOpacity>
      </View>
    )
  }

export default CropsCard
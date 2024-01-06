import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const Learncard = (props) => {
    const {Crops, photo} =props.crops
    const handleSelectCrops = (crop) => {
        props.setSelectCrops(crop)
    }
    return (
        <View>
            <TouchableOpacity onPress={() => handleSelectCrops(props.crops)} className="p-2">
                <ImageBackground source={{ uri: photo }} className='w-80 h-40 bg-white'>
                    <Text className="font-bold text-lg p-1 text-white shadow text-center bg-green-700">{Crops.charAt(0).toUpperCase() + Crops.slice(1)}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

export default Learncard
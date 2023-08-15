import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'

const ConDetails = (props) => {
    const handleBack=()=>{
        props.setSelectAgrRst(false)
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
    </View>
  )
}

export default ConDetails
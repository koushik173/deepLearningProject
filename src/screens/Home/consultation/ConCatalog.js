import { View, Text, TouchableOpacity,Image  } from 'react-native'
import React from 'react'

const ConCatalog = (props) => {
    const{types, logo}=props.agrRst

    const handleSetAgrRst=()=>{
        props.setSelectAgrRst(props.agrRst)
    }
  return (
    <TouchableOpacity onPress={handleSetAgrRst} className="bg-white w-20 h-28 mt-4 ml-6 rounded-xl items-center">
        <Image className="w-16 h-16 mt-2" source={{ uri: logo }} />
        <Text className="text-black text-xs font-bold text-center">{types}</Text>
    </TouchableOpacity>
  )
}

export default ConCatalog
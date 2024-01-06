import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Consultant = (props) => {
    const { name, photo, types, email } = props.agrRst
    const handleSetSelectAgrRst=(agr)=>{
        props.setSelectAgrRst(agr)
    }
    return (
        <TouchableOpacity onPress={()=>handleSetSelectAgrRst(props.agrRst)} className="h-28 mb-4 mt-8 rounded-full">
            <View className="bg-slate-200 h-28 mt-2 rounded-full">
                <View className="flex-row p-3">
                    <Image className="w-36 h-36 -top-12" source={{ uri: photo }} />
                    <View className="p-2">
                        <Text className="text-black font-bold text-base">{name}</Text>
                        <Text className="text-black ">Types: {types}</Text>
                        <Text className="text-black text-xs">{email}</Text>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default Consultant
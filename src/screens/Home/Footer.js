import { View, Image } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View className="flex flex-row w-full rounded-tr-full rounded-tl-full h-24 mt-28 bg-orange-200">
      <Image className="w-60 h-52 rotate-6  mt-2 -top-28 " source={require('../../../Assets/images/ann.png')} />
      <Image className="w-56 h-44 -left-4 mt-6 -top-28" source={require('../../../Assets/images/savePlant.png')} />
    </View>
  )
}

export default Footer

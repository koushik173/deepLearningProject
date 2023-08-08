import { View, Text ,Image} from 'react-native'
import React from 'react'

const Menu = () => {
  return (
    <View className="p-3 rounded-2xl bg-green-900">
      <Image className="w-4 h-4 " source={require('../../../Assets/images/menubar.png')} />
    </View>
  )
}

export default Menu
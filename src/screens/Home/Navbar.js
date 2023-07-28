import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Bars3CenterLeftIcon, BellAlertIcon } from 'react-native-heroicons/solid';

const Navbar = () => {
    const navigation = useNavigation();
  return (
    <View className="navbar flex-row justify-between items-center z-10">
        <Bars3CenterLeftIcon size="30" color="green" />

        <TouchableOpacity onPress={() => navigation.navigate('Notification')}
          className="p-3 rounded-xl ">
          <BellAlertIcon size="40" color="black" />
        </TouchableOpacity>
      </View>
  )
}

export default Navbar
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react';
import { AuthContext } from '../components/Auth/AuthProvider';


const ProfileStackNavigation = () => {
  const {SignOut, user} = useContext(AuthContext);
  

  return (
    <View className="flex-1 justify-center items-center">
      <Text>Welcome to</Text>
      <Text className="m-2 text-lg text-bold text-black">{user.displayName}</Text>
      <TouchableOpacity onPress={() =>SignOut()}>
        <Text className="bg-green-300 rounded-3xl  text-center text-black w-28 p-4 text-lg font-bold">LoginOut</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileStackNavigation
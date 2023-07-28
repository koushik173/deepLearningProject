import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';

const SignUpScreen = () => {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-indigo-600">
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-2"
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image 
                source={require('../../Assets/assets/images/signup.png')} 
                className="w-40 h-32"
            />
        </View>
      </SafeAreaView>

      <View className="flex-1 bg-white px-8 pt-8 rounded-t-3xl">

        <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Full Name</Text>
            <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-3xl mb-3"
                value="john snow"
                placeholder='Enter Name'
            />
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-3xl mb-3"
                value="john@gmail.com"
                placeholder='Enter Email'
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-3xl mb-3"
                secureTextEntry
                value="test12345"
                placeholder='Enter Password'
            />
            <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl" onPress={()=> navigation.navigate('Login')}>
                <Text className="font-xl font-bold text-center text-gray-700">
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mt-3">
            <Text className="text-gray-500 font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-yellow-500"> Login</Text>
            </TouchableOpacity>
        </View>

        <Text className="text-yellow-600 font-bold text-center py-2">
            --------------------------------------------------------------
        </Text>

        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../../Assets/assets/icons/google.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../../Assets/assets/icons/apple.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../../Assets/assets/icons/facebook.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default SignUpScreen
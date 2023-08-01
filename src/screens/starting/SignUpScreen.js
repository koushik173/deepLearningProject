import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import GoBack from '../../components/GoBack';
import SocialLogin from './SocialLogin';

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <View className="flex-1 bg-green-200">

            <SafeAreaView>
                <GoBack></GoBack>
                <View className="flex-row justify-center">
                    <Image
                        source={require('../../../Assets/assets/images/login.png')}
                        className="w-40 h-32"
                    />
                </View>
            </SafeAreaView>

            <View className="flex-1 bg-green-300 rounded-t-[40px]">
                <Text className="font-bold text-black text-2xl p-3 text-center">Create a new account</Text>
                <View className="bg-white rounded-t-[40px] p-5 mt-2">
                    <SocialLogin></SocialLogin>
                    <Text className="text-center text-black text-lg opacity-50">or use your email account</Text>

                    <View className="form space-y-3 mt-4">
                        <View className="mt-2">
                            <TextInput
                                className="p-3 pl-6 rounded-xl mb-3 border border-green-600 text-black text-lg "
                                value=""
                                placeholder='>>'
                            />
                            <Text className="absolute ml-6 bg-white -top-4 text-black text-xl text-green-700">Name</Text>
                        </View>
                        <View className="mt-2">
                            <TextInput
                                className="p-3 pl-6 rounded-xl mb-3 border border-green-600 text-black text-lg "
                                value=""
                                placeholder='>>'
                            />
                            <Text className="absolute ml-6 bg-white -top-4 text-black text-xl text-green-700">Email</Text>
                        </View>
                        <View>
                            <TextInput
                                className="p-3 pl-6 rounded-xl mb-3 border border-green-600 text-black text-lg"
                                value=""
                                secureTextEntry
                                placeholder='>>'
                            />
                            <Text className="absolute ml-6 bg-white -top-4 text-black text-xl text-green-700">Password</Text>
                        </View>

                        <TouchableOpacity className="p-3 bg-green-400 rounded-xl" onPress={() => navigation.navigate('Home')}>
                            <Text className="text-xl font-bold text-center text-black">
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View className="flex-row justify-center mt-3 mb-5">
                        <Text className="text-gray-500 font-semibold">Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="font-semibold text-green-700"> Login</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default LoginScreen
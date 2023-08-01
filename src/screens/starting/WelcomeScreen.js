import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1 bg-orange-500">
            <View className="flex-1 flex justify-around my-4">
                <Text className="text-white font-bold text-4xl text-center">
                    Let's Get Started!
                </Text>
                <View className="flex-row justify-center">
                    <Image
                        source={require('../../../Assets/images/farmer.png')}
                        className="w-80 h-96"
                    />
                </View>
                <View className="space-y-4">
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text className="text-xl font-bold text-center text-gray-700">Sign Up</Text>
                    </TouchableOpacity>

                    <View className="flex-row justify-center">
                        <Text className="text-white font-semibold">
                            Already have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="font-bold text-black-200"> Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen
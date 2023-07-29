import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import GoBack from '../../components/GoBack';

const About = () => {
  
  return (
    <View>
      <GoBack></GoBack>
      <View className="flex flex-between">
        <View>
          <Text>Artificial</Text>
        </View>
        <View>
          
        </View>
      </View>
      
    </View>
  )
}

export default About
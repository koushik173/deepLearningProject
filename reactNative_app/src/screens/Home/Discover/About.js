import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import GoBack from '../../../components/GoBack';

const About = () => {

  return (
    <View className=" w-full h-full">
      <GoBack></GoBack>
      <View className="mt-2">
        <Image className="left-40 w-[65%] h-[65%] rounded-bl-[40px] rounded-tl-[100px] absolute" source={require('../../../../Assets/images/profileeo.png')} />
        <View className="w-[65%] h-[65%] mt-2 bg-green-800 rounded-br-[40px] rounded-tr-[200px] opacity-90">
          <Text className="ml-2 font-bold text-white text-3xl mt-12">TAKE YOUR</Text>
          <Text className="ml-2 font-bold text-yellow-200 text-3xl">PROJECT TO</Text>
          <Text className="ml-2 font-bold text-white text-3xl">THE NEXT LEVEL</Text>
          <Text className="ml-2 font-bold text-white mt-5 text-lg">Koushik Roy</Text>
          <Text className="ml-2 font-bold text-white italic">+8801628248844</Text>
          <Text className="ml-2 font-bold text-white italic">cse_2012020173@lus.ac.bd</Text>
          <Text className="ml-2 font-bold text-white mt-1">Full Stack Developer</Text>
        </View>
      </View>

      <View className="-top-32">
      <Image className="w-[60%] h-[65%] rounded-bl-[40px] rounded-tl-[100px] absolute" source={require('../../../../Assets/images/rimon.png')} />
        <View className="left-40 w-[65%] h-[65%] mt-2 bg-green-800 rounded-bl-[40px] rounded-tl-[200px] opacity-90">
          <Text className="ml-20 font-bold text-white text-3xl mt-14">TAKE YOUR</Text>
          <Text className="ml-16 font-bold text-yellow-200 text-3xl">PROJECT TO</Text>
          <Text className="ml-4 font-bold text-white text-3xl">THE NEXT LEVEL</Text>
          <Text className="font-bold text-white mt-5 text-lg ml-28">Rimon Biswas</Text>
          <Text className="font-bold text-white italic ml-28">+8801628248844</Text>
          <Text className="font-bold text-white italic ml-12">cse_2012020394@lus.ac.bd</Text>
          <Text className="font-bold text-white mt-1 ml-24">Full Stack Developer</Text>
        </View>
        
      </View>
    </View>
  )
}

export default About
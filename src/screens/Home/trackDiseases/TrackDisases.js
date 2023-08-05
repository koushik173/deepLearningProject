import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import GoBack from '../../../components/GoBack'

const TrackDisases = () => {
  return (
    <View>
      <ImageBackground className="w-full h-full " source={require('../../../../Assets/images/bgTrackf.jpg')} resizeMode="cover">
        <View>
          <GoBack></GoBack>
          <View className="mt-3 ml-3">
            <Text className="text-white font-bold">DIAGNOSIS AND TREATMENT</Text>
            <Text className="text-3xl bg-green-900 p-1 text-white font-bold">Plant Leaf Diseases</Text>
            <Text className='font-bold italic text-white'>Trace Plant Diseases by capturing leaf photos.</Text>
          </View>
          <View className='items-center mt-6'>
            <View className="w-64 h-56  rounded-2xl shadow-lg p-5 shadow-white border-8 border-black">
              <Text className='font-bold italic text-white'>Trace Plant Diseases by capturing leaf photos.</Text>
            </View>
          </View>
          <View className='flex-row justify-center items-center -top-10'>
            <Image className="w-16 h-16 mr-2" source={require('../../../../Assets/images/scanner.png')} />
            <Image className="w-20 h-14" source={require('../../../../Assets/images/gallery.png')} />
          </View>

          <View className='flex-row justify-between '>
            <View >
              <Text className="ml-5 text-lg bg-green-900 p-2 rounded-2xl text-white font-bold">Diseases Name</Text>
              <View className='flex-row justify-center items-center w-36 h-12 rounded-full  shadow-lg shadow-red-500'>
                <Text className="text-xl text-center text-white font-bold">Virus</Text>
              </View>

            </View>
            <View >
            <Text className="mr-5 text-lg bg-green-900 p-2 rounded-2xl text-white font-bold">Confidence Level</Text>
            <View className='flex-row justify-center items-center w-36 h-12 rounded-full  shadow-lg shadow-white'>
                <Text className="text-xl text-center text-white font-bold">100%</Text>
              </View>

            </View>
          </View>

        </View>
      </ImageBackground>
    </View>
  )
}

export default TrackDisases

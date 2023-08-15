import { View, Text, ImageBackground, TextInput, Button, Alert, TouchableOpacity } from 'react-native'
import { useForm, Controller } from "react-hook-form"

import React, { useState } from 'react'
import GoBack from '../../../components/GoBack'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import RecommendPlants from './RecommendPlants';

const PlantRecomend = () => {
  const [cropsData, setCropsData] = useState(false)

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      Nitrogen: "",
      Phosphorus: "",
      Potassium: "",
      Temperature: "",
      Humidity: "",
      Ph: "",
      Rainfall: ""
    },
  })

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://10.0.2.2:8000/cropsRecommend', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // console.log('Response:', response.data);
      setCropsData(response.data)

    } catch (error) {
      console.log(error.message);
      Alert.alert('', error.message, [
        { text: 'OK', style: 'cancel' },
      ]);
    }
  }

  const handleClear = () => {
    setCropsData(false)
    reset()
  }

  return (
    <SafeAreaView>
      <ImageBackground className="w-full h-full " source={require('../../../../Assets/images/bgTrack.jpg')} resizeMode="cover">
        
        {
          cropsData ? <RecommendPlants handleClear={handleClear} cropsData={cropsData}></RecommendPlants> :
            <View>
              <GoBack></GoBack>
              <Text className="text-black font-bold ml-1 text-white text-xs mt-2">Specific recommendations are given by using nutrient-environment parameters.</Text>
              <Text className="font-bold text-white text-2xl mt-2 bg-green-700 p-1">Plant Recommendation</Text>
              <View className="flex flex-wrap h-[350px] gap-2 ml-8 mt-5">
                <View>
                  <Text className="text-white ml-5 font-bold">Nitrogen</Text>
                  <Controller control={control} rules={{
                    required: { value: true, message: "This is required" }, pattern: {
                      value: /^-?\d+(\.\d+)?$/,
                      message: "Enter only number",
                    }
                  }} render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className="bg-white rounded-full w-36 opacity-60 text-black text-center font-bold text-lg"
                      placeholder="Nitrogen"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      type="number"
                    />
                  )}
                    name="Nitrogen"
                  />
                  {errors.Nitrogen && <Text className="text-center text-red-600">{errors.Nitrogen.message}</Text>}
                </View>

                <View>
                  <Text className="text-white ml-5 font-bold">Phosphorus </Text>
                  <Controller control={control} rules={{
                    required: { value: true, message: "This is required" }, pattern: {
                      value: /^-?\d+(\.\d+)?$/,
                      message: "Enter only number",
                    }
                  }} render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className="bg-white rounded-full w-36 opacity-60 text-black text-center font-bold text-lg"
                      placeholder="Phosphorus"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                    name="Phosphorus"
                  />
                  {errors.Phosphorus && <Text className="text-center text-red-600">{errors.Phosphorus.message}</Text>}
                </View>

                <View>
                  <Text className="text-white ml-5 font-bold">Potassium</Text>
                  <Controller control={control} rules={{
                    required: { value: true, message: "This is required" }, pattern: {
                      value: /^-?\d+(\.\d+)?$/,
                      message: "Enter only number",
                    }
                  }} render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className="bg-white rounded-full w-36 opacity-60 text-black text-center font-bold text-lg"
                      placeholder="Potassium"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                    name="Potassium"
                  />
                  {errors.Potassium && <Text className="text-center text-red-600">{errors.Potassium.message}</Text>}
                </View>

                <View>
                  <Text className="text-white ml-5 font-bold">Temperature</Text>
                  <Controller control={control} rules={{
                    required: { value: true, message: "This is required" }, pattern: {
                      value: /^-?\d+(\.\d+)?$/,
                      message: "Enter only number",
                    }
                  }} render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className="bg-white rounded-full w-36 opacity-60 text-black text-center font-bold text-lg"
                      placeholder="Temperature"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                    name="Temperature"
                  />
                  {errors.Temperature && <Text className="text-center text-red-600">{errors.Temperature.message}</Text>}
                </View>

                <View>
                  <Text className="text-white ml-5 font-bold">Humidity</Text>
                  <Controller control={control} rules={{
                    required: { value: true, message: "This is required" }, pattern: {
                      value: /^-?\d+(\.\d+)?$/,
                      message: "Enter only number",
                    }
                  }} render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className="bg-white rounded-full w-36 opacity-60 text-black text-center font-bold text-lg"
                      placeholder="Humidity"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                    name="Humidity"
                  />
                  {errors.Humidity && <Text className="text-center text-red-600">{errors.Humidity.message}</Text>}
                </View>

                <View>
                  <Text className="text-white ml-5 font-bold">PH</Text>
                  <Controller control={control} rules={{
                    required: { value: true, message: "This is required" }, pattern: {
                      value: /^-?\d+(\.\d+)?$/,
                      message: "Enter only number",
                    }
                  }} render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className="bg-white rounded-full w-36 opacity-60 text-black text-center font-bold text-lg"
                      placeholder="PH"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                    name="Ph"
                  />
                  {errors.Ph && <Text className="text-center text-red-600">{errors.Ph.message}</Text>}
                </View>

                <View>
                  <Text className="text-white ml-5 font-bold">Rainfall</Text>
                  <Controller control={control} rules={{
                    required: { value: true, message: "This is required" }, pattern: {
                      value: /^-?\d+(\.\d+)?$/,
                      message: "Enter only number",
                    }
                  }} render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className="bg-white rounded-full w-36 opacity-60 text-black text-center font-bold text-lg"
                      placeholder="Rainfall"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                    name="Rainfall"
                  />
                  {errors.Rainfall && <Text className="text-center text-red-600">{errors.Rainfall.message}</Text>}
                </View>

              </View>

              <TouchableOpacity onPress={handleSubmit(onSubmit)} className="bg-white rounded-full w-60 ml-16 opacity-70 p-2">
                <Text className="font-bold text-lg text-black text-center">Recommend</Text>
              </TouchableOpacity>
            </View>
        }

      </ImageBackground>
    </SafeAreaView>
  )
}

export default PlantRecomend
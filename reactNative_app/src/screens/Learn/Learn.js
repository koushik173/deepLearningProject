import { View, Text, Alert, Image, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form"
import Learncard from './Learncard';
import CropsCardInfo from '../Home/plantQuest/CropsCardInfo';

const Learn = () => {
  const navigation = useNavigation();
  const [CropsInfo, setCropsInfo] = useState([]);
  const [selectCrops, setSelectCrops] = useState(false);
  const [goBack, setGoback] = useState(true);
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      Search: ""
    },
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://10.0.2.2:5000/all_crops_info');
        setCropsInfo(res.data)

      } catch (error) {
        console.log(error.message);
        Alert.alert('', error.message, [
          { text: 'OK', style: 'cancel' },
        ]);
      }
    };
    fetchData();
  }, [goBack]);

  const handleSearch = async (search) => {
    try {
      if (!search.Search.length > 0) {
        const res = await axios.get('http://10.0.2.2:5000/all_crops_info');
        setCropsInfo(res.data)
      } else {
        const res = await axios.get(`http://10.0.2.2:5000/search_crops/${search.Search}`);
        setCropsInfo(res.data);
      }
    } catch (error) {
      console.log(error.message);
      Alert.alert('', error.message, [
        { text: 'OK', style: 'cancel' },
      ]);
    }
    reset();
  };

  const handleBack = () => {
    setGoback(!goBack)
    reset()
    navigation.navigate('HomeScreen')
  }

  return (
    <View>
      {
        selectCrops ? <CropsCardInfo key={selectCrops._id} selectCrops={selectCrops} setSelectCrops={setSelectCrops} /> : <ImageBackground className="w-full h-full " source={require('../../../Assets/images/bgprofile.jpg')} resizeMode="cover">
          
          <TouchableOpacity
            onPress={() => handleBack()}
            className="bg-green-800 h-8 w-16 rounded-tr-2xl rounded-bl-2xl ml-2 mt-2 items-center justify-center"
          >
            <ArrowLeftIcon size="35" color="white" />
          </TouchableOpacity>
          <Text className="text-3xl bg-green-900 p-1 text-white font-bold mt-1 text-center">Learn</Text>
          <View className="flex-row justify-center mt-2 items-center">

            <Controller control={control} rules={{
              required: { value: true, message: "This is required" }
            }} render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className='w-52 opacity-70 rounded-full ml-2 p-2 text-sm h-8 border-green-700  bg-white'
                placeholder="Search"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                type="text"
              />
            )}
              name="Search"
            />
            {errors.Search && <Text className="text-center text-red-600">{errors.Search.message}</Text>}

            <TouchableOpacity onPress={handleSubmit(handleSearch)}>
              <Image className="w-10 h-10 ml-2 " source={require('../../../Assets/images/search.png')} />
            </TouchableOpacity>
          </View>


          <ScrollView>
            <View className="mt-1 p-2 items-center">
              {CropsInfo.length > 0 ? (
                CropsInfo.map(crops => (
                  <Learncard key={crops._id} setSelectCrops={setSelectCrops} crops={crops} ></Learncard>
                ))
              ) : (
                <Text className="text-white font-bold text-2xl">Loading...</Text>
              )}
            </View>
          </ScrollView>
        </ImageBackground>
      }

    </View>
  )
}

export default Learn
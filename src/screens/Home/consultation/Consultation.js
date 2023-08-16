import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import GoBack from '../../../components/GoBack'
import Consultant from './Consultant'
import axios from 'axios';
import ConCatalog from './ConCatalog';
import ConDetails from './ConDetails';

const Consultation = () => {
  const [agriculerist, setAgriculerist]= useState([]);
  const [selectAgrRst, setSelectAgrRst]= useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://10.0.2.2:5000/agriculerist');
        setAgriculerist(res.data)

      } catch (error) {
        console.log(error.message);
        Alert.alert('', error.message, [
          { text: 'OK', style: 'cancel' },
        ]);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <ImageBackground className="w-full h-full " source={require('../../../../Assets/images/bgTrack.jpg')} resizeMode="cover">
        {
          selectAgrRst? <ConDetails selectAgrRst={selectAgrRst} setSelectAgrRst={setSelectAgrRst} />:
          <View className="p-1">
          <GoBack />
          <Text className="text-white font-bold text-2xl bg-green-700 p-2 mt-2">Consultation {}</Text>
          <View className="w-full h-52 bg-white rounded-tl-[80px] rounded-br-[80px] opacity-50 absolute top-28" />
          <Text className="text-black font-bold text-xl mt-8 ml-10">Categories</Text>
          <ScrollView className="ml-5 mr-12" horizontal showsHorizontalScrollIndicator={false}>
            {
              agriculerist && (
                agriculerist.map(agrRst => (
                  <ConCatalog key={agrRst._id} setSelectAgrRst={setSelectAgrRst} agrRst={agrRst} ></ConCatalog>
                ))
              )
            }
          </ScrollView>
          <Text className="mt-16 font-bold text-xl text-white ml-1">Nearby Consultant : </Text>
          <ScrollView className="m-6 h-96 -top-4">
          {agriculerist.length > 0 ? (
              agriculerist.map(agrRst => (
                <Consultant key={agrRst._id} setSelectAgrRst={setSelectAgrRst} agrRst={agrRst} ></Consultant>
              ))
            ) : (
              <Text className="text-white font-bold text-2xl">Loading...</Text>
            )}
            <View className="mt-8"></View>
          </ScrollView>
        </View>
        }
        
      </ImageBackground>
    </View>
  )
}

export default Consultation
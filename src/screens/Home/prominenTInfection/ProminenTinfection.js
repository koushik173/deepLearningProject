import { View, Text, Alert,Image, ScrollView , ImageBackground, TextInput, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DiseasesCard from './DiseasesCard';
import GoBack from '../../../components/GoBack';
import DiscardInfo from './DiscardInfo';

const ProminenTinfection = () => {
  const [diseasesinfo, setDiseasesInfo] = useState([]);
  const [selectDis, setSelectDis] = useState(false);
  // console.log(selectDis.name);
  const [inputChange, setInputChange] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://10.0.2.2:5000/all_diseases_info');
        setDiseasesInfo(res.data)

      } catch (error) {
        console.log(error.message);
        Alert.alert('', error.message, [
          { text: 'OK', style: 'cancel' },
        ]);
      }
    };
    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://10.0.2.2:5000/search_diseases/${inputChange}`);
      setDiseasesInfo(res.data);
    } catch (error) {
      console.log(error.message);
      Alert.alert('', error.message, [
        { text: 'OK', style: 'cancel' },
      ]);
    }
  };

  return (
    <View>
      {
        selectDis? <DiscardInfo key={selectDis._id} selectDis={selectDis} setSelectDis={setSelectDis} ></DiscardInfo>:<ImageBackground className="w-full h-full " source={require('../../../../Assets/images/bgTrackf.jpg')} resizeMode="cover">
        {/* <Text> length:  {diseasesinfo.length}</Text> */}
        <GoBack></GoBack>
        <Text className="text-3xl bg-green-900 p-1 text-white font-bold mt-1">All Diseases Information:</Text>
        <View className="flex-row justify-start items-center">
          <TextInput onChangeText={val => setInputChange(val)} placeholder='search' className='w-52 opacity-70 rounded-full ml-2 p-2 text-sm h-8 border-green-700  bg-white'/>
          <TouchableOpacity onPress={()=>handleSearch()}>
            <Image className="w-10 h-10 ml-2 " source={require('../../../../Assets/images/search.png')} />
          </TouchableOpacity>
        </View>
        
        
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View className="flex flex-wrap mt-1 p-2">
            {diseasesinfo.length > 0 ? (
              diseasesinfo.map(diseases => (
                <DiseasesCard key={diseases._id} setSelectDis={setSelectDis} diseases={diseases} ></DiseasesCard>
              ))
            ) : (
              <Text className="text-white font-bold text-2xl">Loading...</Text>
            )}
          </View>
        </ScrollView>
        </ImageBackground>
      }
      
    </View>
  );
}

export default ProminenTinfection
import { View, Text, Alert, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CropsCard from './CropsCard';
import CropsCardInfo from './CropsCardInfo';
import GoBack from '../../../components/GoBack';
const RecommendPlants = (props) => {
    cropsname = Object.keys(props.cropsData.predictions);
    // console.log(cropsname);
    const [cropsInfo, setCropsInfo] = useState([]);
    const [selectCrops, setSelectCrops] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post('http://10.0.2.2:5000/all_crops_info', cropsname, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setCropsInfo(res.data)

            } catch (error) {
                console.log(error.message);
                Alert.alert('', error.message, [
                    { text: 'OK', style: 'cancel' },
                ]);
            }
        };
        fetchData();
    }, []);
    //   console.log(cropsInfo);

    return (
        <View>
            {
                selectCrops ? <CropsCardInfo key={selectCrops._id} selectCrops={selectCrops} setSelectCrops={setSelectCrops}></CropsCardInfo> :
                    <View>
                        <GoBack></GoBack>
                        <Text className="text-black font-bold ml-1 text-white text-xs mt-2">Specific recommendations are given by using nutrient-environment parameters.</Text>
                        <Text className="font-bold text-white text-2xl mt-2 bg-green-700 p-1">Plant Recommendation</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                            <View className="flex flex-wrap h-[400px] gap-2 ml-2 mt-5">
                                {cropsInfo.length > 0 ? (
                                    cropsInfo.map(cropsdata => (
                                        <CropsCard key={cropsdata._id} setSelectCrops={setSelectCrops} cropsdata={cropsdata} ></CropsCard>
                                    ))
                                ) : (
                                    <Text className="text-white font-bold text-2xl">Loading...</Text>
                                )}
                            </View>
                        </ScrollView>
                        <TouchableOpacity onPress={props.handleClear} className="bg-white rounded-full w-60 ml-16 opacity-70 p-2">
                            <Text className="font-bold text-lg text-black text-center"> Clear</Text>
                        </TouchableOpacity>
                    </View>
            }

        </View>
    )
}

export default RecommendPlants
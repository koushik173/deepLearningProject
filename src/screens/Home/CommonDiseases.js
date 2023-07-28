import { View, Text , ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import FruitCard from '../../components/FruitCard'
import { featuredFruits } from '../../../Assets/Data/Data'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/solid';

const CommonDiseases = () => {
    const navigation = useNavigation();
    return (
        <View className="carousel -top-6">
            <View className="flex-row justify-between items-center ">
                <Text className="text-2xl font-bold text-green-700">Prominent Infections: </Text>
                <TouchableOpacity onPress={() => navigation.navigate('ProminenTinfection')} 
                className="mr-6 text-base font-bold ">
                    <View className="flex-row items-center shadow-lg shadow-green-500 ">
                        <Text>See More </Text>
                        <ArrowRightIcon size="15" color="black" />
                    </View>
                    
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    featuredFruits.map((fruit, index) => {
                        return (
                            <FruitCard key={index} fruit={fruit}></FruitCard>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default CommonDiseases 


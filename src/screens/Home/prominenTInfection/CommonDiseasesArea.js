import { View, Text , ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import TopDisCard from '../../../components/TopDisCard'
import { topDiseases } from '../../../../Assets/Data/Data'

const CommonDiseasesArea = () => {
    
    return (
        <View className="carousel -top-6">
            <Text className="text-2xl font-bold text-green-700">Prominent Infections: </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    topDiseases.map((diseases, index) => {
                        return (
                            <TopDisCard key={index} diseases={diseases}></TopDisCard>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default CommonDiseasesArea 


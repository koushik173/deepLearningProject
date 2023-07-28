import { View, Text, TouchableOpacity, Image, ScrollView, Touchable } from 'react-native'
import React, { useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, BellAlertIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { categories, featuredFruits } from '../../Assets/Data/Data';
import FruitCard from '../components/FruitCard';
import FruitCardSales from '../components/FruitCardSales';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Oranges');
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-orange-100">
      
      <View className="z-10">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            categories.map((category, index) => {
              let isActive = category == activeCategory;
              let textClass = `text-xl text-center w-28 p-1 ${isActive ? 'bg-red-300 font-bold rounded-full  ' : ''}`;
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(category)}
                  key={index}
                  className="mr-2 relative rounded-full">
                  <Text className={textClass}>{category}</Text>
                  {
                    isActive ? (
                      <Text className="font-extrabold -mt-3 ml-2 text-center text-orange-400">__________</Text>
                    ) : null
                  }
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>


      <ScrollView className="z-10 mt-5">
        {/* carousel */}
        <View className="carousel">
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

        {/* sales */}
        <View className="mt-8 pl-5 space-y-1">
          <Text className="text-xl font-bold">Hot Sales</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ overflow: 'visible' }}>
            {
              featuredFruits.map((fruit, index) => {
                return (
                  <FruitCardSales key={index} fruit={fruit}  >  </FruitCardSales>
                );
              })
            }
          </ScrollView>
        </View>
      </ScrollView>


    </SafeAreaView>
  )
}

export default Home
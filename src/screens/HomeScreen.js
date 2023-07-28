import { View, Text, TouchableOpacity, Image, ScrollView, Touchable } from 'react-native'
import React, { useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, HeartIcon, ShoppingCartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { categories, featuredFruits } from '../../Assets/Data/Data';
import FruitCard from '../components/FruitCard';
import FruitCardSales from '../components/FruitCardSales';

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('Oranges');
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      {/* Navbar in top */}
      <View className="navbar bg-orange-200 flex-row justify-between items-center">
        <Bars3CenterLeftIcon size="30" color="black" />
        <TouchableOpacity onPress={() => navigation.navigate('Camera')} 
        className="p-2 rounded-xl bg-orange-100">
          <ShoppingCartIcon size="25" color="orange" />
        </TouchableOpacity>
      </View>
      <ScrollView>
      {/* categories */}
      <View className="mt-4">
        <Text className="bg-indigo-300 text-2xl tracking-widest font-medium p-3 text-center">Seasonal</Text>
        <Text className="bg-rose-400 text-3xl font-semibold p-2 m-2 text-center ">Fruits and Vegetables</Text>
        <ScrollView className="mt-8 px-5 " horizontal showsHorizontalScrollIndicator={false}>
          {
            categories.map((category, index) => {
              let isActive = category == activeCategory;
              let textClass = `text-xl text-center w-28 p-1 ${isActive ? 'bg-sky-200 font-bold rounded-full  ' : ''}`;
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

        {/* carousel */}
        <View className="carousel mt-8">
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

export default HomeScreen
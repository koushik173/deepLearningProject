import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TopDisContext } from './Auth/TopDisProvider';

const TopDisCard = ({diseases}) => {
  const navigation = useNavigation();
  const {setSelectTopDis} = useContext(TopDisContext);

  const handleTop=(dis)=>{
    setSelectTopDis(dis);
    navigation.navigate('TopDiseases')
  }
  return (
    <TouchableOpacity onPress={() => handleTop(diseases)}  className="mx-2 w-36 h-20 mt-14 p-3 rounded-3xl" style={{ backgroundColor: diseases.color(1)}}>
        <View className="-top-16">
            <Image className="w-24 h-24" source={diseases.image} />
            <Text className="font-bold text-black shadow text-center">{diseases.name.replace(/_/g, ' ')}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default TopDisCard
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useContext } from "react";
import Modal from "react-native-modal";
import { AuthContext } from '../Auth/AuthProvider';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  const { SignOut, user } = useContext(AuthContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleNav = (value) => {
    setModalVisible(false);
    navigation.navigate(value);
  }
  return (
    <View>
      <TouchableOpacity onPress={() => toggleModal()} className="p-3 rounded-2xl bg-green-900">
        <Image className="w-4 h-4 " source={require('../../../Assets/images/menubar.png')} />
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}
        animationIn={"fadeInLeft"}
        animationOut={"fadeOutLeft"}
        onBackdropPress={() => setModalVisible(false)}>
        <View className="w-[75%] h-[106%] -left-5">
          <View className="opacity-60 w-full h-full bg-emerald-200 absolute" />

          <Image className="w-full h-44 absolute rounded-xl" source={require('../../../Assets/images/bgTrack.jpg')} />
          <View className="p-5 mt-2">
            <Image className="w-24 h-24 bg-green-50 rounded-full" source={require('../../../Assets/images/avaterUser.png')} />
            <Text className="text-white font-bold">{user.displayName}</Text>
            <Text className="text-white font-bold">{user.email}</Text>
          </View>

          <View className="gap-3 mt-1">
            <TouchableOpacity onPress={() => handleNav('HomeScreen')} className="flex-row rounded-full p-2 bg-green-800 items-center">
              <Image className="w-8 h-8 ml-3 mr-3" source={require('../../../Assets/images/homeBar.png')} />
              <Text className="text-white font-bold text-xl ">Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNav('UserProfile')} className="flex-row rounded-full p-2 bg-green-800 items-center">
              <Image className="w-8 h-8 ml-3 mr-3" source={require('../../../Assets/images/profilee.png')} />
              <Text className="text-white font-bold text-xl ">Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNav('About')} className="flex-row rounded-full p-2 bg-green-800 items-center">
              <Image className="w-8 h-8 ml-3 mr-3" source={require('../../../Assets/images/aboutt.png')} />
              <Text className="text-white font-bold text-xl ">About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNav('Learn')} className="flex-row rounded-full p-2 bg-green-800 items-center">
              <Image className="w-8 h-8 ml-3 mr-3" source={require('../../../Assets/images/book.png')} />
              <Text className="text-white font-bold text-xl ">Learn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNav('Blog')} className="flex-row rounded-full p-2 bg-green-800 items-center">
              <Image className="w-8 h-8 ml-3 mr-3" source={require('../../../Assets/images/bloggg.png')} />
              <Text className="text-white font-bold text-xl ">Blog</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-green-900 opacity-90 h-1 mt-[100%] " />

          <TouchableOpacity onPress={() => SignOut()} className="w-44 flex-row ml-10 rounded-full p-2 mt-2 justify-center bg-green-800 items-center">
            <Text className="text-white font-bold text-xl ">Log Out</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default Menu
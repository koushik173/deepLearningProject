import { View } from 'react-native'
import React from "react";
import { Bars3CenterLeftIcon } from 'react-native-heroicons/solid';
import NotificationModal from '../../../components/modals/NotificationModal';
import Menu from '../../../components/menu/Menu';


const Navbar = () => {
  return (
    <View className="navbar flex-row justify-between items-center z-10">
      <Menu></Menu>
      <NotificationModal></NotificationModal>
    </View>
  )
}

export default Navbar
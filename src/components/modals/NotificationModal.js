import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from "react";
import { BellAlertIcon } from 'react-native-heroicons/solid'
import Modal from "react-native-modal";
import NotifyContain from './NotifyContain';
const NotificationModal = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View>
            <TouchableOpacity onPress={toggleModal}
                className="rounded-2xl bg-green-900 mr-2 mt-1">
                <Image className="w-10 h-10  " source={require('../../../Assets/images/bellGreen.png')} />
            </TouchableOpacity>

            <Modal isVisible={isModalVisible} 
            animationIn={"fadeInDown"}
            animationOut={"fadeOutUp"}
            onBackdropPress={() => setModalVisible(false)}>
                <View className="bg-emerald-50 w-80 h-96 rounded-3xl ml-12 -top-44">
                    <View className="flex-row justify-between items-center">
                        <Text></Text>
                        <Text className="left-4 text-xl rounded-br-3xl rounded-tl-3xl p-2 font-bold text-black bg-blue-300 ">Notifications</Text>
                        <Image className="w-16 h-16 -top-5 left-2" source={require('../../../Assets/images/bell.png')} />
                    </View>

                    <ScrollView>
                        <NotifyContain></NotifyContain>
                        <NotifyContain></NotifyContain>
                        <NotifyContain></NotifyContain>
                        <NotifyContain></NotifyContain>
                        <NotifyContain></NotifyContain>
                        <NotifyContain></NotifyContain>
                        <NotifyContain></NotifyContain>
                    </ScrollView>
                    
                </View>
            </Modal> 

        </View>
    )
}

export default NotificationModal
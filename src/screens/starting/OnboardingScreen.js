import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

// import Lottie from 'lottie-react-native';
// import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
    const navigation = useNavigation();
    const handleDone = () => {
        navigation.navigate("Welcome");
    }
    return (
        <View style={styles.container}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                pages={[
                    {
                        backgroundColor: '#C3D7B9',
                        image: (
                            <View>
                               <Image className="w-96 h-96" source={require('../../../Assets/images/hello.png')} />
                            </View>
                        ),
                        title: <Text className="text-[40px] text-black font-bold">Hello !</Text>,
                        subtitle: <Text className="text-2xl text-black font-bold">Welcome To Angrosheild</Text>
                    },
                    {
                        backgroundColor: '#638467',
                        image: (
                            <View>
                                <Image className="w-[400px] h-[450px]" source={require('../../../Assets/images/harvest.png')} />
                            </View>
                        ),
                        title: <Text className="text-[40px] text-white font-bold">Harvest</Text>,
                        subtitle: <Text className="text-lg text-white font-bold">Let's Explore Agriculture World With Agrosheild </Text>
                    },
                    {
                        backgroundColor: '#3D6641',
                        image: (
                            <View>
                                <Image className="w-[400px] h-[450px]" source={require('../../../Assets/images/explore.png')} />

                            </View>
                        ),
                        title: <Text className="text-3xl text-white font-bold">Explore Diseases</Text>,
                        subtitle: <Text className="text-lg text-white font-bold">Let's Catch A Virus From The Harvest </Text>
                    },
                ]}
            >
            </Onboarding>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddinghorizontal: 15,

    },
    lottie: {
        width: width * 0.9,
        height: width
    }
})
export default OnboardingScreen
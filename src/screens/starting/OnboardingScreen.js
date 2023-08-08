import { View, Text, StyleSheet, Dimensions } from 'react-native';
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
                        backgroundColor: '#FF8B02',
                        image: (
                            <View style={styles.lottie}>
                                {/* <LottieView source={require("../../../Assets/Animation/onboardingAnimation.json")} autoPlay loop /> */}
                                {/* <Lottie source={require('../../Assets/Animation/onboardingAnimation.json')} autoPlay loop /> */}
                            </View>
                        ),
                        title: 'Onboarding',
                        subtitle: 'Done with Reaact Native Onboarding Swipper'
                    },
                    {
                        backgroundColor: '#FF8B02',
                        image: (
                            <View style={styles.lottie}>
                                {/* <LottieView source={require('../../../Assets/Animation/animation_lkc8ccy5.json')} autoPlay loop /> */}

                            </View>
                        ),
                        title: 'Harvest',
                        subtitle: 'Done with Reaact Native Onboarding Swipper'
                    },
                    {
                        backgroundColor: '#FF8B02',
                        image: (
                            <View style={styles.lottie}>
                                {/* <LottieView source={require('../../../Assets/Animation/animation_lkc89tt9.json')} autoPlay loop /> */}

                            </View>
                        ),
                        title: 'Third Year Project',
                        subtitle: 'Done with Reaact Native Onboarding Swipper'
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
import { View, Text ,TouchableOpacity, Image} from 'react-native'
import React from 'react'

const SocialLogin = () => {
    return (
        <View className="flex-row justify-center space-x-6">
            <TouchableOpacity>
                <Image source={require('../../../Assets/assets/icons/google.png')}
                    className="w-10 h-12" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../../Assets/assets/icons/twiter.png')}
                    className="w-10 h-12" />
            </TouchableOpacity>
            <TouchableOpacity >
                <Image source={require('../../../Assets/assets/icons/facebook.png')}
                    className="w-10 h-12" />
            </TouchableOpacity>
        </View>
    )
}

export default SocialLogin
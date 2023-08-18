import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Alert } from 'react-native'
import React, { useContext, useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import GoBack from '../../components/GoBack';
import { AuthContext } from '../../components/Auth/AuthProvider';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';
import Loading from '../../components/loading/Loading';


const LoginScreen = () => {
    const navigation = useNavigation();
    const { loading, Login, userError, StopError, setuserError, resetPassword } = useContext(AuthContext);
    const[checkEmail, setCheckEmail]= useState(false);

    const [sendPassReset, setSendPassReset] = useState(false);

    const [data, setData] = useState({
        email: '',
        password: '',
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    })

    if(loading){
        return <Loading></Loading>
    }

    if(userError.length>0){
        // setuserError('')
        Alert.alert(userError, null, [{ text: 'OK', onPress: () => StopError()}]);
    }

    

    const handleLogin = (userData) => {
        setSendPassReset(false)
        setuserError('')
        if(data.email.length>0 && data.password.length>0 && data.isValidUser && data.isValidPassword){
            Login(userData.email,userData.password)
            // Alert.alert("succeess")
            setCheckEmail(false)

        }else{
            Alert.alert('Invalid Format', 'Please enter a name in the required format', [
                { text: 'OK', style: 'cancel' },
              ]);
            setCheckEmail(false)
            setData({
                email: '',
                password: ''
            })
        }
        
        
        
    }

    const textInputChange = val => {
        const gmailPattern = /^[a-z][a-z0-9._%+-]{2,}@(gmail\.com|lus\.ac\.bd)$/;
        const isValidemail = gmailPattern.test(val);

        if (!isValidemail) {
            setCheckEmail(false)
            setData({
                ...data,
                email: val,        
                isValidUser: false,
                check_email: false
            })
        } else {
            setCheckEmail(true)
            setData({
                ...data,
                email: val,        
                isValidUser: true,
                
            })
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    }

    const handlePasswordChange = val => {
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
        const isValidPass = passPattern.test(val);

        if (!isValidPass) {
            setData({
                ...data,
                password: val,        
                isValidPassword: false

            });
        } else {
            setData({
                ...data,
                password: val,        
                isValidPassword: true
                
            });
        }
    }

    const handleForgetPassword=(data)=>{
        // console.log(data);
        setCheckEmail(false)
        if( data.isValidUser && data.email.length>0){
            resetPassword(data.email);
            setSendPassReset(true);
        }else{
            Alert.alert('Invalid Format', 'Please enter a valid email', [
                { text: 'OK', style: 'cancel' },
              ]);
        }
    }


    return (
        <ScrollView className="flex-1 bg-emerald-700">

            <SafeAreaView>
                <GoBack></GoBack>
                <View className="flex-row justify-center">
                    <Image
                        source={require('../../../Assets/assets/images/login.png')}
                        className="w-40 h-32"
                    />
                </View>
            </SafeAreaView>

            <View className="flex-1 bg-green-300 rounded-[40px] ">
                <Text className="font-bold text-black text-2xl p-6 text-center">Login to your account</Text>
                <View className="bg-white rounded-[40px] p-5 ">

                    <View className="form space-y-7 mt-6">
                        <View className="mt-2">
                            <TextInput
                                className={`p-3 pl-6 rounded-xl mb-3 border ${data.isValidUser?'border-green-700': 'border-red-700'} text-black text-lg `}
                                onChangeText={val => textInputChange(val)}
                                placeholder='>>'
                                autoCapitalize="none"
                                // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                            />
                            <Text className={`absolute ml-6 bg-white -top-4 text-black text-xl ${data.isValidUser?'text-green-700': 'text-red-700'}`}>Email</Text>

                            <View className="flex-row-reverse">
                                {checkEmail ?
                                    <Image className="w-10 h-12 absolute -top-16" source={require('../../../Assets/images/right.png')} /> :
                                    null}
                            </View>
                            <View className="-top-2">
                                {
                                    data.isValidUser ? null : 
                                    <Text className="absolute ml-2  text-red-500">example@gmail.com or example@lus.ac.bd</Text>
                                }
                            </View>


                        </View>
                        <View>
                            <TextInput
                                className={`p-3 pl-6 rounded-xl mb-3 border ${data.isValidPassword?'border-green-700': 'border-red-700'} text-black text-lg`}
                                autoCapitalize="none"
                                onChangeText={val => handlePasswordChange(val)}
                                secureTextEntry={data.secureTextEntry ? true : false}
                                placeholder='>>'
                            />
                            <Text className={`absolute ml-6 bg-white -top-4 text-black text-xl ${data.isValidPassword?'text-green-700': 'text-red-700'}`}>Password</Text>
                            

                            <TouchableOpacity onPress={updateSecureTextEntry} className="flex-row-reverse">
                            <View className="absolute -top-14 mr-2 mt-1">   
                                {data.secureTextEntry?
                                <EyeIcon size={28}  color="green"/>:
                                <EyeSlashIcon size={28}  color="red"/>
                                }
                            </View>
                            

                            </TouchableOpacity>
                            <View className="-top-2">
                                {
                                    data.isValidPassword ? null : 
                                    <Text className="absolute ml-2  text-red-500 w-64">8 char long include uppercase, lowercase, digit, special char.</Text>
                                }
                            </View>

                            <View className="flex-row-reverse ml-2">
                                {
                                    sendPassReset?
                                    <TouchableOpacity disabled onPress={() => handleForgetPassword(data)}><Text className="text-red-300 font-bold italic">Forget Password</Text></TouchableOpacity>:
                                    <TouchableOpacity onPress={() => handleForgetPassword(data)}><Text className="text-green-700 font-bold">Forget Password</Text></TouchableOpacity>
                                }
                                
                            </View>
                            
                            
                            
                            
                        </View>
                        {
                            (data.email.length>0 && data.password.length>0 && data.isValidPassword && data.isValidUser)?
                            <TouchableOpacity className="p-3 bg-green-400 rounded-xl"
                            onPress={() => handleLogin(data)}>
                            <Text className="text-xl font-bold text-center text-black">
                                Log In
                            </Text>
                            </TouchableOpacity> :

                            <TouchableOpacity disabled className="p-3 bg-red-400 rounded-xl opacity-40"
                            onPress={() => handleLogin(data)}>
                            <Text className="text-xl font-bold text-center text-black">
                                Log In
                            </Text>
                            </TouchableOpacity>
                        }

                        
                    </View>

                    <View className="flex-row justify-center mt-3 mb-5">
                        <Text className="text-gray-500 font-semibold">Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text className="font-semibold text-green-700"> Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default LoginScreen
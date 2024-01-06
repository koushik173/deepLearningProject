import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import GoBack from '../../components/GoBack'
import { AuthContext } from '../../components/Auth/AuthProvider';
import { useForm, Controller } from "react-hook-form"

const UserProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [editName, setEditName] = useState(false);

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      Uname: ""
    },
  })


  const handleUpdateUser = async (uname) => {
    const name = uname.Uname;
    setEditName(false);

    try {
      await user.updateProfile({
        displayName: name,
      });

      // Update the user state with the updated display name
      setUser((prevUser) => ({
        ...prevUser,
        displayName: name,
      }));
    } catch (error) {
      console.log(error.message);
      Alert.alert('', error.message, [{ text: 'OK', style: 'cancel' }]);
    }
    reset();
  };
  
  const handleCancel=()=>{
    setEditName(false);
    reset();
  }
  return (
    <View>
      <ImageBackground className="w-full h-full" source={require('../../../Assets/images/bgprofile.jpg')} resizeMode="cover">
        <ScrollView>
        <GoBack></GoBack>
        <Text className="bg-green-700 text-white text-3xl mt-1 font-bold text-center p-2">Profile</Text>
       
        {
          !editName && <TouchableOpacity onPress={() => setEditName(!editName)} className="flex-row justify-end top-6 -left-8">
          <Image className="w-12 h-12 absolute" source={require('../../../Assets/images/editProfile.png')} />
        </TouchableOpacity>
        }
        
        <View className="m-8 w-44 h-44 items-center left-20">
          <View className="w-64 h-44 rounded-xl bg-white absolute opacity-40" />
          <Image className="w-24 h-24 bg-green-50 rounded-full mt-3" source={require('../../../Assets/images/avaterUser.png')} />
          <Text className="text-white font-bold text-lg">{user.displayName}</Text>
          <Text className="font-bold text-black text-base">Sylhet Bangladesh</Text>
        </View>
        <View className="p-3 items-center -top-2">
          <View className="w-80 h-16 rounded-xl bg-white absolute opacity-40" />
          <Text className="text-white font-bold italic">+880 1345455687</Text>
          <Text className="text-white font-bold italic">{user.email}</Text>
        </View>
        {
          editName &&
          <View className="mt-5 items-center">
            <Text className="text-white font-bold text-base">Updated Name: </Text>
            
            <Controller control={control} rules={{
              required: { value: true, message: "This is required" }
            }} render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className='w-72 h-14 opacity-70 rounded-full ml-6 p-4 text-lg  font-bold border-green-700  bg-white'
                placeholder="Uname"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                type="text"
              />
            )}
              name="Uname"
            />
             {errors.Uname && <Text className="text-center text-red-600">{errors.Uname.message}</Text>}
             
            <View className="flex-row justify-start mt-5">
              <TouchableOpacity onPress={handleSubmit(handleUpdateUser)} className="bg-green-800 w-36 rounded-xl">
                <Text className="text-xl text-center text-white font-bold p-2">Update</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>handleCancel()} className="bg-green-800 w-36 rounded-xl ml-2">
                <Text className="text-xl text-center text-white font-bold p-2">Cancel</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        }
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default UserProfile
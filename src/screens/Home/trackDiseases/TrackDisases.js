import { View, Text, ImageBackground, Image, Touchable, Alert, Linking, TouchableOpacity, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import GoBack from '../../../components/GoBack'
import ImagePicker from 'react-native-image-crop-picker';
import { request, PERMISSIONS, RESULTS, check } from 'react-native-permissions';
import axios from 'axios';

const TrackDisases = () => {
  const [image, setImage] = useState('');
  const [photoFile, setphotoFile]=useState();
  const [diseases, setDiseases] = useState('');

  const takePictureFromCamera = async () => {
    try {
      const result = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);

      console.log(result);
      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera Permission Granted.');
        ImagePicker.openCamera({
          width: 256,
          height: 256,
          cropping: true,
          mediaType: 'photo',
          
        }).then(image => {
          console.log(image.path);
          setImage(image.path);
          setphotoFile(image);
        }).catch(error => {
          console.log(error);
        })

      } else if (result === PermissionsAndroid.RESULTS.DENIED) {
        console.log('Camera Permission Denied.');
      } else if (result === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        console.log('Camera Permission Denied with Never Ask Again.');
        Alert.alert(
          'Camera Permission Required',
          'App needs access to your Camera to read files. Please go to app settings and grant permission.',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Open Settings', onPress: openSettings },
          ],
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  const openSettings = () => {
    Linking.openSettings();
  };

  const choosePhotoFromLibrary = async () => {
    try {
      const result = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      console.log(result);
      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage Permission Granted.');

        ImagePicker.openPicker({
          width: 256,
          height: 256,
          cropping: true,
          mediaType: 'photo',
          
        }).then(image => {
          console.log(image.path);
          setImage(image.path);
          setphotoFile(image);
        }).catch(error => {
          console.log(error);
        })

      } else if (result === PermissionsAndroid.RESULTS.DENIED) {
        console.log('Storage Permission Denied.');
      } else if (result === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        console.log('Storage Permission Denied with Never Ask Again.');
        Alert.alert(
          'Storage Permission Required',
          'App needs access to your storage to read files. Please go to app settings and grant permission.',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Open Settings', onPress: openSettings },
          ],
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const imageClear=()=>{
    setImage(false);
    setphotoFile(false);
    setDiseases('')
    console.log('Clear image');
  }

  const predictDiseases = async()=>{
    setDiseases('Predicting...');
    try {
      if (photoFile) {
        const path = photoFile.path;
        const params ={
          uri: path,
          name:path.substring(path.lastIndexOf('/')+1),
          type: photoFile.mime
        }
        console.log("Params: ",params);

        //send photo with axios
        let formData = new FormData();
        formData.append('file',params)
        console.log("sending by axios..");

        let res = await axios.post('http://10.0.2.2:8000/potatoLeafPredict',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        
        // console.log(res);

        if (res.status === 200) {
          // Handle the response data
          console.log(res.data);
          setDiseases(res.data);
        }
        else{
          throw new Error('Failed to predicting.')
        }
  
      } else {
        throw new Error('no photo')
      }
      
    } catch (error) {
      console.log(error.message);
    }

  }
  


  return (
    <View>
      <ImageBackground className="w-full h-full " source={require('../../../../Assets/images/bgTrackf.jpg')} resizeMode="cover">
        <View>
          <GoBack></GoBack>
          <View className="mt-3 ml-3">
            <Text className="text-white font-bold">DIAGNOSIS AND TREATMENT</Text>
            <Text className="text-3xl bg-green-900 p-1 text-white font-bold">Plant Leaf Diseases</Text>
            <Text className='font-bold italic text-white'>Trace Plant Diseases by capturing leaf photos.</Text>
          </View>
          <View className='items-center mt-6'>

            <View className="w-80 h-56  rounded-2xl shadow-lg shadow-white border-4 border-green-950">
              {
                image ? <Image className="w-full h-full" source={{ uri: image }} /> :
                  <Image className="w-full h-full" source={{ uri: 'https://i.ibb.co/Q8JXsH6/image.png' }} />
              }
            </View>

          </View>
          <View className='flex-row justify-center items-center -top-10'>

            <TouchableOpacity onPress={takePictureFromCamera}>
              <Image className="w-16 h-16 mr-2" source={require('../../../../Assets/images/scanner.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={choosePhotoFromLibrary}>
              <Image className="w-20 h-14" source={require('../../../../Assets/images/gallery.png')} />
            </TouchableOpacity>
          </View>

          <View className='flex-row justify-between '>
            <View >
              <Text className=" text-center border-green-950 mr-5 ml-2 text-lg  p-2 rounded-tl-2xl rounded-br-2xl  text-white bg-green-700 font-bold">Diseases Name</Text>
              <View className='flex-row justify-center items-center w-64 h-12 rounded-full  shadow-lg shadow-red-500'>
                <Text className="text-lg text-center text-red-100 font-bold">{diseases.class}</Text>
              </View>
            </View>

            <View >
              <Text className="-left-2 text-lg  border-green-950  p-2 rounded-tl-2xl rounded-br-2xl text-white bg-green-700 font-bold">Confidence Level</Text>
              <View className='flex-row justify-center items-center w-36 h-12 rounded-full  shadow-lg shadow-white'>
                <Text className="text-xl text-center text-black font-bold">{diseases.confidence}%</Text>
              </View>
            </View>
          </View>

          {/* //prediction area */}
          <View className="mt-[25%]">
            <View className="items-center mb-4">
              <TouchableOpacity onPress={()=>predictDiseases()} className="w-44 h-10 justify-center rounded-2xl  border-4 border-green-800 bg-green-500" >
                <Text className="text-xl text-center font-bold text-white italic">Predict</Text>
              </TouchableOpacity>
            </View>
            <View className='flex-row justify-between'>
              <TouchableOpacity className="w-44 h-10 justify-center rounded-tr-2xl rounded-br-2xl  bg-green-900" ><Text className="text-xl text-center font-bold text-white italic">Solution..</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>imageClear()} className="w-44 h-10 justify-center rounded-tl-2xl rounded-bl-2xl  bg-green-900" ><Text className="text-xl text-center font-bold text-white italic">Clear..</Text></TouchableOpacity>
            </View>
          </View>


        </View>
      </ImageBackground>
    </View>
  )
}

export default TrackDisases

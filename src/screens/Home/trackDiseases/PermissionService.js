import {Alert, Platform, openSettings} from 'react-native';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';

const openSettingsd = () => {
  Linking.openSettings();
};

const showAlert=(message)=>{
  Alert.alert('', message,[
    {
      text: 'cancel',
      onPress:()=>console.log('Cancel Done'),
      style: 'cancel',
    },
    {
      text: 'Settings',
      onPress:()=>{openSettingsd().catch(()=> console.warn('Can not open Settings'))}
    },
  ])
}

const hasCameraPermission= async( withAlert= true)=>{
  try {
    const response = await check(PERMISSIONS.ANDROID.CAMERA);
    let camera;
    if(response.camera !== RESULTS.GRANTED){
      camera = await request(PERMISSIONS.ANDROID.CAMERA);
    }

    if( camera === RESULTS.DENIED || camera === RESULTS.BLOCKED){
      if(withAlert){
        showAlert('Camera access is not permitted. In this application, the camera cannot be used.')
      }
      return false;
    }
    console.log('cameraPermitted');
    return true;
    
  } catch (error) {
    console.log("cameraError: ",error.message);
    return false;
  }
}

const hasPhotoPermission= async( withAlert= true)=>{
  try {
    const response = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
    let photo;
    if(response.photo !== RESULTS.GRANTED){
      photo = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
    }

    if( photo === RESULTS.DENIED || photo === RESULTS.BLOCKED){
      if(withAlert){
        showAlert('Photo access is not permitted. In this application, the photo cannot be used.')
      }
      return false;
    }
    console.log('Photo permitted');
    return true;
    
  } catch (error) {
    console.log("Photo error",error.message);
    return false;
  }
}



const PermissionService = () => {
  hasCameraPermission,
  hasPhotoPermission
}

export default PermissionService
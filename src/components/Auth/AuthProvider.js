import React, { createContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert } from 'react-native';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import axios from 'axios';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userError, setuserError] = useState('');
  const [loading, setLoading] = useState(false);
  const StopLoading = () => { setLoading(false) }
  const StopError = () => { setuserError(false) }

  
  

  const SignUp = async (name, email, password) => {

    console.log(name, email, password);
    setuserError('');
    setLoading(true);

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Send email verification
      await user.sendEmailVerification();
      console.log('Email verification sent successfully');

      // Update user name
      await user.updateProfile({
        displayName: name
      });
      console.log('User profile updated successfully');

      // setUser(null);
      saveUserInfo(name, email);

    } catch (error) {
      // console.error('Error creating user or sending email verification:', error);
      if (error.code === 'auth/email-already-in-use') {
        setuserError('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        setuserError('That email address is invalid!');
      } else {
        setuserError(error.message); // Set other errors
      }
    }
    setLoading(false);
  };

  const Login = async (email, password) => {
    setuserError('');
    setLoading(true);
    try {
      const res = await auth().signInWithEmailAndPassword(email, password);
      console.log(res);
      //check user verified or not
      if (res.user.emailVerified) {
        console.log('Login successful');
        setUser(res.user);
      } else {
        throw new Error('Please verify your email before logging in.');
      }
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/wrong-password') {
        setuserError('Passwords do not match. Please try again.');
      }
      else if (error.code === 'auth/user-not-found') {
        setuserError('User not found. Please try again.');
      }
      else (setuserError(error.message))
    }
    setLoading(false);
  };

  const resetPassword = async(email)=>{
    console.log("For Reset: ",email);
    setLoading(true);
    setuserError('');
    
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Reset Password link Sent!', 'Please follow the instructions in the email', [
        { text: 'OK', style: 'cancel' },
      ]);
    } catch (error) {
      console.log(error);
      setuserError(error.message);
      
    }
    setLoading(false);
  }

  const SignOut = async() => {
    try {
      res = await auth().signOut();
      console.log('User signed out!');
      setUser({ ...user, "emailVerified": false })

    } catch (error) {
      setuserError(error.message);
    }
  };

  const signInWithGoogle = async () => {
    console.log("working not");
    // useEffect(() => {
    //   GoogleSignin.configure({
    //     webClientId: 'AIzaSyDY_SZPdPgT4jFONv5NJ5-BG1JDCaXD9eA', 
    //   });
    // }, []);

    // try {
    //   await GoogleSignin.hasPlayServices();
    //   const { idToken } = await GoogleSignin.signIn();
    //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    //   await auth().signInWithCredential(googleCredential);
    //   console.log('Google login success');
    // } catch (error) {
    //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //     console.log('Google login canceled');
    //   } else if (error.code === statusCodes.IN_PROGRESS) {
    //     console.log('Google login is in progress');
    //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //     console.log('Play services are not available');
    //   } else {
    //     console.error('Google login error:', error);
    //   }
    // }
  };

  const saveUserInfo = async(name, email)=>{
    const userData={name, email}
    try {
      const response = await axios.post('http://10.0.2.2:5000/users', userData);
      console.log('Server response: ', response.data);
    } catch (error) {
      console.log("Server: ",error.message);
      // setuserError(error.message)
    }
  }

  const authInfo = {
    SignUp,
    setUser,
    user,
    Login,
    SignOut,
    userError,
    setuserError,
    loading,
    StopLoading,
    StopError,
    resetPassword,
    signInWithGoogle,
    
  

  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

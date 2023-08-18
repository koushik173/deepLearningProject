import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Blog from '../screens/blog/Blog';

const BlogStack = createNativeStackNavigator();

const BlogStackNavigation = () => {
  return (
    <BlogStack.Navigator initialRouteName='Blog' screenOptions={{
        headerShown: false
    }}>
        <BlogStack.Screen name='Blog' component={Blog} />
    </BlogStack.Navigator>
  )
}

export default BlogStackNavigation
// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SentimentCategoriesScreen from '../screens/SentimentCategoriesScreen';
import SongListScreen from "../screens/SongListScreen";
import SongPlayerScreen from "../screens/SongPlayerScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SentimentCategories" component={SentimentCategoriesScreen} />
            <Stack.Screen name="SongList" component={SongListScreen} />
            <Stack.Screen name="SongPlayer" component={SongPlayerScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;

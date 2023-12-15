// navigation/MainNavigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../home/Home';
import DetailScreen from '../../components/DetailScreen';
import SplashScreen from '../splash/SplashScreen';
import ListItem from '../../components/ListItem';
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen}
          options={{ headerLeft: null }} // Hide back button for SplashScreen
        />
        <Stack.Screen name="Home" component={Home}
          options={{ headerLeft: null }} // Hide back button for SplashScreen
        />
        <Stack.Screen name="ListItem" component={ListItem}
          options={{ headerLeft: null }} // Hide back button for SplashScreen
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

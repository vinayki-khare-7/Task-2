
// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/splash/SplashScreen';
import Home from './screens/home/Home';
import DetailScreen from './components/DetailScreen';
import MainNavigation from './screens/route/MainNavigation';

const Stack = createStackNavigator();

const App = () => {
  // const [splashVisible, setSplashVisible] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSplashVisible(false);
  //   }, 2300); // 2300 milliseconds (2.3 seconds) for the splash screen
  // }, []);

  // if (splashVisible) {
  //   return <SplashScreen />;
  //}

  return (
    <>
      <MainNavigation />
    </>
  );
};


export default App;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import CountScreen from './Screens/CountScreen';
import AboutScreen from './Screens/AboutScreen';


const MainNavigator = createBottomTabNavigator({
  countScreen: { screen: CountScreen },
  aboutScreen: { screen: AboutScreen }
});

const App = createAppContainer(MainNavigator);

export default App;

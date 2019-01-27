import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import CountScreen from './Screens/CountScreen';


const MainNavigator = createBottomTabNavigator({
  countScreen: { screen: CountScreen },
});

const App = createAppContainer(MainNavigator);

export default App;

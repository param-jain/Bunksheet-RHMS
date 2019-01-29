import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import CountScreen from './Screens/CountScreen';
import AboutScreen from './Screens/AboutScreen';


const MainNavigator = createBottomTabNavigator({
  countScreen: { screen: CountScreen },
  aboutScreen: { screen: AboutScreen }
});

const Mania = createAppContainer(MainNavigator);

class App extends React.Component {
  render() {
    return(
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Mania />
      </View>
    );

  }
}

export default App;

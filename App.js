import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'; 
import ListScreen from './app/screens/listScreen';
import JerrycanScreen from './app/screens/jerrycanScreen';

const RootStack = createStackNavigator(
  {
    List: ListScreen,
    Jerrycan: JerrycanScreen
  },
  {
    initialRouteName: 'List'
  }
);

export default class Main extends Component {
  render() {
    return <RootStack />;
  }
}

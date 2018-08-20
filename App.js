import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'; 
import ListScreen from './app/screens/listScreen';
import JerrycanScreen from './app/screens/jerrycanScreen';
import JerrycanEditScreen from './app/screens/jerrycanEditScreen';
import Expo from "expo";

const RootStack = createStackNavigator(
  {
    List: ListScreen,
    Jerrycan: JerrycanScreen,
    JerrycanEdit: JerrycanEditScreen
  },
  {
    initialRouteName: 'List'
  }
);

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return <RootStack />;
  }
}

import React, { Component } from 'react';
import { Container, Body, Switch, Text, Content, ListItem, Left, Right, Button, Icon } from 'native-base';
import SettingsEdit from '../components/settingsEdit';

export default class SettingsScreen extends Component {
  
  static navigationOptions = {
    title: 'Settings'
  }

  constructor(props) {
    super(props);
  }
  
    render() {
  
      return (
        <Container style={{backgroundColor: "#ecebf2"}}>
          <SettingsEdit />
        </Container>
      )
    }
  }
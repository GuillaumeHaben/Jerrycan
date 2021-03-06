import React, { Component } from 'react';
import { Container } from 'native-base';
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
          <SettingsEdit 
            data={this.props.navigation.getParam('data', null)}
          />
        </Container>
      )
    }
  }
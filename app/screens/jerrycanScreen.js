import React, { Component } from 'react';
import { Container } from 'native-base';
import Jerrycan from '../components/jerrycan';

export default class JerrycanScreen extends Component {
  
  static navigationOptions = {
    title: 'Jerrycan'
  }

  constructor(props) {
    super(props);    
  }
  
    render() {
      return (
        <Container style={{backgroundColor: "#ecebf2"}}>
          <Jerrycan
            data={this.props.navigation.getParam('data', null)}
            handleDeleteJerrycan={this.props.navigation.getParam('handleDeleteJerrycan', null)}
            handleEditJerrycan={this.props.navigation.getParam('handleEditJerrycan', null)}
          />
        </Container>
      )
    }
  }
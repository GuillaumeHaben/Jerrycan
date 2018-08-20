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
        <Container style={{backgroundColor: "#fff"}}>
          <Jerrycan 
            data={this.props.navigation.getParam('data', null)} 
            handleDeleteJerrycan={this.props.navigation.state.params.handleDeleteJerrycan}
            handleEditJerrycan={this.props.navigation.state.params.handleEditJerrycan}
          />
        </Container>
      )
    }
  }
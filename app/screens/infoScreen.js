import React, { Component } from 'react';
import { Container } from 'native-base';
import Info from '../components/info';

export default class InfoScreen extends Component {
  
  static navigationOptions = {
    title: 'Info'
  }

  constructor(props) {
    super(props);
  }
  
    render() {
  
      return (
        <Container style={{backgroundColor: "#ecebf2"}}>
          <Info 
            data={this.props.navigation.getParam('data', null)}
          />
        </Container>
      )
    }
  }
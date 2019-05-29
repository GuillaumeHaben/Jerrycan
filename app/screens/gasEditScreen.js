import React, { Component } from 'react';
import { Container } from 'native-base';
import GasEdit from '../components/gasEdit';

export default class GasEditScreen extends Component {
  
  static navigationOptions = {
    title: 'Gas'
  }

  constructor(props) {
    super(props);
  }
  
    render() {
      return (
        <Container style={{backgroundColor: "#ecebf2"}}>
          <GasEdit 
            data={this.props.navigation.getParam('data', null)}
          />
        </Container>
      )
    }
  }
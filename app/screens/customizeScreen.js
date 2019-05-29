import React, { Component } from 'react';
import { Container } from 'native-base';
import CustomizeEdit from '../components/customize';

export default class CustomizeScreen extends Component {
  
  static navigationOptions = {
    title: 'Customize'
  }

  constructor(props) {
    super(props);
  }
  
    render() {
      return (
        <Container style={{backgroundColor: "#ecebf2"}}>
          <CustomizeEdit 
            data={this.props.navigation.getParam('data', null)}
          />
        </Container>
      )
    }
  }
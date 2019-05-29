import React, { Component } from 'react';
import { Container } from 'native-base';
import LocationEdit from '../components/locationEdit';

export default class LocationEditScreen extends Component {
  
  static navigationOptions = {
    title: 'Location'
  }

  constructor(props) {
    super(props);
  }
  
    render() {
      return (
        <Container style={{backgroundColor: "#ecebf2"}}>
          <LocationEdit 
            data={this.props.navigation.getParam('data', null)}
          />
        </Container>
      )
    }
  }
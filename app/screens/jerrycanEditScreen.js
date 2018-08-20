import React, { Component } from 'react';
import { Container } from 'native-base';
import JerrycanEdit from '../components/jerrycanEdit';

export default class JerrycanEditScreen extends Component {
  
  static navigationOptions = {
    title: 'JerrycanEdit'
  }

  constructor(props) {
    super(props);
  }
  
    render() {
  
      return (
        <Container style={{backgroundColor: "#fff"}}>
          <JerrycanEdit 
            data={this.props.navigation.getParam('data', null)} 
            handleEditJerrycan={this.props.navigation.state.params.handleEditJerrycan}
          />
        </Container>
      )
    }
  }
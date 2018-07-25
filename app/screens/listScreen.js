
import React, { Component } from 'react';
import { Container, Fab, Icon, Button } from 'native-base';
import JerrycanList from '../components/jerrycanList';

export default class ListScreen extends Component {
  
    static navigationOptions = {
      title: 'Jerrycan List'
    }

    render() {
  
      return (
        <Container style={{backgroundColor: "#fff"}}>
          <JerrycanList />
          <Fab
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            >
            <Icon name="plus" type="Feather"/>
          </Fab>
        </Container>
      )
    }
  }
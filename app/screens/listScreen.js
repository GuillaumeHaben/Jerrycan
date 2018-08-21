import React, { Component } from 'react';
import { Container, Fab, Icon, Button } from 'native-base';
import JerrycanList from '../components/jerrycanList';
import { AsyncStorage } from "react-native"

export default class ListScreen extends Component {
  
    static navigationOptions = {
      title: 'Jerrycan List'
    }

    constructor(props) {
      super(props);
      this.state = {
        jerrycans: []
      }
    }

    componentDidMount = () => {
      AsyncStorage.getItem('jerrycans').then((jerrycans) => {jerrycans == null ? this.setState({jerrycans: []}) : this.setState({ jerrycans: JSON.parse(jerrycans) })})
    }

    setDBJerrycans = (jerrycans) => {
      AsyncStorage.setItem('jerrycans', JSON.stringify(jerrycans));
      this.setState({ jerrycans });
    }
  
    handleAddJerrycan() {
      var jerrycans = this.state.jerrycans;
      jerrycans.push({
          _id: Math.random().toString(16).substr(2, 4).toUpperCase(),
          fillingDate: '',
          location: '',
          capacity: '',
          status: false
      });
      this.setDBJerrycans(jerrycans);
    }

    handleDeleteJerrycan = (id) => {    
      const remainder = this.state.jerrycans.filter((jerrycan) => {
        if(jerrycan._id !== id) return jerrycan;
      });
      this.setDBJerrycans(remainder);
    }

    handleEditJerrycan = (id, fillingDate, location, capacity, status, callback) => {
      let jerrycans = [...this.state.jerrycans];
      const index = jerrycans.findIndex((jerrycan) => jerrycan._id == id);
      jerrycans[index].fillingDate = fillingDate;
      jerrycans[index].location = location;
      jerrycans[index].capacity = capacity;
      jerrycans[index].status = status;
      this.setDBJerrycans(jerrycans)
      callback();
    }

    render() {
      return (
        <Container style={{backgroundColor: "#fff"}}>
          <JerrycanList 
            data={this.state.jerrycans} 
            handleDeleteJerrycan={this.handleDeleteJerrycan}
            handleEditJerrycan={this.handleEditJerrycan}
          />
          <Fab
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#c0392b' }}
            position="bottomRight"
            onPress={() => this.handleAddJerrycan()}
            >
            <Icon name="plus" type="Feather"/>
          </Fab>
        </Container>
      )
    }
  }
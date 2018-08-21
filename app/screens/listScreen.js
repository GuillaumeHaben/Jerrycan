import React, { Component } from 'react';
import { Container, Fab, Icon, Button } from 'native-base';
import JerrycanList from '../components/jerrycanList';
import { AsyncStorage, Alert } from "react-native"

export default class ListScreen extends Component {
  
    static navigationOptions = {
      title: 'Jerrycan List'
    }

    constructor(props) {
      super(props);
      this.state = {
        jerrycans: [],
        fab: false
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
          _id: Math.random().toString(36).substr(2, 9).toUpperCase(),
          number: '',
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

    handleDeleteAll = () => {
      this.setDBJerrycans([]);
    }

    handleEditJerrycan = (id, number, fillingDate, location, capacity, status, callback) => {
      let jerrycans = [...this.state.jerrycans];
      const index = jerrycans.findIndex((jerrycan) => jerrycan._id == id);
      jerrycans[index].number = number;
      jerrycans[index].fillingDate = fillingDate;
      jerrycans[index].location = location;
      jerrycans[index].capacity = capacity;
      jerrycans[index].status = status;
      this.setDBJerrycans(jerrycans)
      callback();
    }

    _showAlert = () => {
      Alert.alert(
        'Warning',
        'Are you sure to delete ALL the jerrycans?',
        [
          {text: 'Cancel', style: 'cancel'},
          {text: 'OK', onPress: () => this.handleDeleteAll()},
        ],
        { cancelable: true }
      )
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
            active={this.state.fab}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#34495e' }}
            position="bottomRight"
            onPress={() => this.setState({ fab: !this.state.fab })}
          >
          <Icon name="menu"/>

            <Button 
              style={{ backgroundColor: '#34A34F' }}
              onPress={() => this.handleAddJerrycan()}
            >
              <Icon name="plus" type="Feather"/>
            </Button>
            {!!this.state.jerrycans.length != 0 && 
            <Button 
              style={{ backgroundColor: '#e74c3c' }}
              onPress={this._showAlert}
            >
              <Icon name="x" type="Feather" />
            </Button>}
          </Fab>
        </Container>
      )
    }
  }
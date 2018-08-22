import React, { Component } from 'react';
import { Container, Icon, Button } from 'native-base';
import JerrycanList from '../components/jerrycanList';
import { AsyncStorage } from "react-native"
import { withNavigation } from 'react-navigation';

class ListScreen extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        jerrycans: [],
        settings: []
      }
    }

    static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state;
      return {
      title: 'Jerrycan List',
      headerRight: (
      <Button transparent
        onPress={() => params.handleNavigateSettings()}
      >
        <Icon name="settings" type="SimpleLineIcons" />
      </Button>
      ),
      headerLeft: (
      <Button transparent
        onPress={() => params.handleAddJerrycan()}
      >
        <Icon name="plus" type="Feather"/>
      </Button>
      )
    }}

    navigateSettings = () => {
      this.props.navigation.navigate(
        'Settings', 
        {'data': this.state,
        'handleDeleteAll': this.handleDeleteAll
        }
      )
    }

    componentDidMount = () => {
      this.props.navigation.setParams({ 
        handleNavigateSettings: this.navigateSettings, 
        handleAddJerrycan: this.handleAddJerrycan,
        handleDeleteJerrycan: this.handleDeleteJerrycan,
        handleEditJerrycan: this.handleEditJerrycan
      });
      AsyncStorage.getItem('jerrycans').then((jerrycans) => {jerrycans == null ? this.setState({jerrycans: []}) : this.setState({ jerrycans: JSON.parse(jerrycans) })})
    }

    setDBJerrycans = (jerrycans) => {
      AsyncStorage.setItem('jerrycans', JSON.stringify(jerrycans));
      this.setState({ jerrycans });
    }
  
    handleAddJerrycan = () => {
      const jerrycans = this.state.jerrycans;
      const _id = Math.random().toString(36).substr(2, 9).toUpperCase();
      jerrycans.push({
          _id: _id,
          id: '',
          fillingDate: '',
          location: '',
          gasType: '',
          capacity: '',
          status: false
      });
      
      this.setDBJerrycans(jerrycans); 
      this.props.navigation.navigate(
        'Jerrycan', 
        {'data': this.state.jerrycans.find((jerrycan) => jerrycan._id == _id), 
        'handleDeleteJerrycan': this.handleDeleteJerrycan,
        'handleEditJerrycan': this.handleEditJerrycan
        }
      )
    }

    handleDeleteJerrycan = (id) => {    
      const remainder = this.state.jerrycans.filter((jerrycan) => {
        if(jerrycan._id !== id) return jerrycan;
      });
      this.setDBJerrycans(remainder);
    }

    handleDeleteAll = () => {
      this.setDBJerrycans([]);
      this.props.navigation.navigate('List');
    }

    handleEditJerrycan = (_id, id, fillingDate, location, gasType, capacity, status, callback) => {      
      if (!!_id) {
        let jerrycans = [...this.state.jerrycans];
        const index = jerrycans.findIndex((jerrycan) => jerrycan._id == _id);
        jerrycans[index].id = id;
        jerrycans[index].fillingDate = fillingDate;
        jerrycans[index].location = location;
        jerrycans[index].gasType = gasType;
        jerrycans[index].capacity = capacity;
        jerrycans[index].status = status;
        this.setDBJerrycans(jerrycans)
        callback();
      }    
    }

    render() {
      return (
        <Container style={{backgroundColor: "#ecebf2"}}>
          <JerrycanList 
            data={this.state.jerrycans} 
            handleDeleteJerrycan={this.handleDeleteJerrycan}
            handleEditJerrycan={this.handleEditJerrycan}
          />
        </Container>
      )
    }
  }

  export default withNavigation(ListScreen);
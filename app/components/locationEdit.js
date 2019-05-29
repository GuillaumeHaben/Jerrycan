import React, { Component } from 'react';
import { Body, Text, Content, ListItem, Right, Icon, Input, Item } from 'native-base';
import { withNavigation } from 'react-navigation';

class LocationEdit extends Component {

  constructor(props) {
    super(props);
    this.handleEditLocations = this.props.navigation.getParam('handleEditLocations', null);
    this.state = {
      locations: this.props.data.settings.locations
    }
  }

  handleAdd = () => {
    let locations = this.state.locations;
    locations.push({
      _id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      name: ""
    });
    this.handleEditLocations(this.props.data.settings.locations);
  }

  handleChange = (_id, value) => {
    const index = this.props.data.settings.locations.findIndex((location) => location._id == _id);
    let locations = this.props.data.settings.locations;
    locations[index]._id = _id;
    locations[index].name = value;
    this.handleEditLocations(this.props.data.settings.locations);
  }

  render() {
    
    return (
      <Content style={{marginTop: 15}}>
      {
      !!this.props.data.settings.locations && this.props.data.settings.locations.map((location) => {
        return <Item style={{ backgroundColor: "#fff"}} inlineLabel last 
          key={location._id} 
          >
              <Input returnKeyType='done' maxLength={24} value={location.name}
                onChangeText={(value) => this.handleChange(location._id, value)}/>
          </Item>
      })
      }
          <ListItem style={{ backgroundColor: "#fff", marginTop: 15}} last
            onPress={() => this.handleAdd()}
          >
            <Body>
              <Text style={{ color: "#097bfb" }}>Add...</Text>
            </Body>
          </ListItem>
      </Content>
    );
  }
}

export default withNavigation(LocationEdit);
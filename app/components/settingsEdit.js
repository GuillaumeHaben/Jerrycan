import React, { Component } from 'react';
import { Body, Text, Content, ListItem, Left, Right, Button, Icon, Label, Picker } from 'native-base';
import { withNavigation } from 'react-navigation';
import { Alert } from 'react-native';

class SettingsEdit extends Component {

  constructor(props) {
    super(props);
    this.delAll = this.props.navigation.state.params.handleDeleteAll;
    this.handleEditLocations = this.props.navigation.state.params.handleEditLocations;
  }

  _showAlert = () => {
    Alert.alert(
      'Warning',
      'Are you sure to delete ALL the jerrycans?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: () => this.deleteAll()},
      ],
      { cancelable: true }
    )
  }

  deleteAll = () => {
    this.delAll();
  }

  render() {
    return (
      <Content style={{marginTop: 15}}>
        <ListItem style={{ backgroundColor: "#fff"}} last icon
          onPress={() => this.props.navigation.navigate(
            'Info', 
            {'data': this.props.data}
          )}
        >
          <Left>
            <Button primary>
              <Icon name="info" type="FontAwesome"/>
            </Button>
          </Left>
          <Body>
            <Text>Info</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem style={{ backgroundColor: "#fff"}} last icon
          onPress={() => this.props.navigation.navigate(
            'Customize', 
            {'data': this.props.data,
            'handleEditLocations': this.handleEditLocations}
          )}
        >
          <Left>
            <Button warning>
              <Icon name="mode-edit" type="MaterialIcons"/>
            </Button>
          </Left>
          <Body>
            <Text>Customize</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem style={{ backgroundColor: "#fff", marginTop: 15}} last icon 
        onPress={this._showAlert}>
          <Left>
            <Button danger>
              <Icon name="x" type="Feather" />
            </Button>
          </Left>
          <Body>
            <Text>Delete all jerrycans</Text>
          </Body>
        </ListItem>
      </Content>
    );
  }
}

export default withNavigation(SettingsEdit);
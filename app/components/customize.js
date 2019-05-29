import React, { Component } from 'react';
import { Body, Text, Content, ListItem, Right, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

class Customize extends Component {

  constructor(props) {
    super(props);
    this.handleEditLocations = this.props.navigation.state.params.handleEditLocations;
  }

  render() {
    return (
      <Content style={{marginTop: 15}}>
      <ListItem style={{ backgroundColor: "#fff"}} last icon
        onPress={() => this.props.navigation.navigate(
          'LocationEdit', 
          {'data': this.props.data,
          'handleEditLocations': this.handleEditLocations
          }
        )}
      >
          <Body>
            <Text>Locations</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem style={{ backgroundColor: "#fff"}} last icon
          onPress={() => this.props.navigation.navigate(
            'GasEdit', 
            {'data': this.props.data}
          )}
        >
          <Body>
            <Text>Gas types</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
      </Content>
    );
  }
}

export default withNavigation(Customize);
import React, { Component } from 'react';
import { Body, Text, Content, ListItem, Right, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

class GasEdit extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content style={{marginTop: 15}}>
        <ListItem style={{ backgroundColor: "#fff"}} last>
          <Body>
            <Text>Super 98</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
      </Content>
    );
  }
}

export default withNavigation(GasEdit);
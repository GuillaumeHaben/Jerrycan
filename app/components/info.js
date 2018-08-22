import React, { Component } from 'react';
import { Body, Text, Content, ListItem, Right } from 'native-base';
import { withNavigation } from 'react-navigation';
import { Platform, ProgressViewIOS, ProgressBarAndroid } from 'react-native';

class Info extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: this.getGasAvailable() / this.getTotalCapacity()
    }
  }

  getNumberUnusedJerrycans = () => {
    return this.props.data.jerrycans.filter((jerrycan) => jerrycan.status == false).length;
  }

  getNumberJerrycans = () => {
    return this.props.data.jerrycans.length;
  }

  getGasAvailable = () => {
    let total = 0;
    this.props.data.jerrycans.filter((jerrycan) => (jerrycan.status == true && !!jerrycan.capacity)).map((jerrycan) => {
      total += parseInt(jerrycan.capacity);
    });
    return total;
  }

  getTotalCapacity = () => {
    let total = 0;
    this.props.data.jerrycans.filter((jerrycan) => !!jerrycan.capacity).map((jerrycan) => {
      total += parseInt(jerrycan.capacity);
    });
    return total;
  }

  render() {
    return (
      <Content style={{marginTop: 15}}>
        <ListItem style={{ backgroundColor: "#fff"}} last>
          <Body>
            <Text>Unused jerrycans</Text>
          </Body>
          <Right>
            <Text>{this.getNumberUnusedJerrycans()}</Text>
          </Right>
        </ListItem>
        <ListItem style={{ backgroundColor: "#fff"}} last>
          <Body>
            <Text>Total number of jerrycans</Text>
          </Body>
          <Right>
            <Text>{this.getNumberJerrycans()}</Text>
          </Right>
        </ListItem>
        <ListItem style={{ backgroundColor: "#fff", marginTop: 15}} last>
          <Body>
            <Text>Gas available</Text>
          </Body>
          <Right>
            <Text>{this.getGasAvailable()}L</Text>
          </Right>
        </ListItem>
        <ListItem style={{ backgroundColor: "#fff"}} last>
          <Body>
            <Text>Gas capacity</Text>
          </Body>
            <Text>{this.getTotalCapacity()}L</Text>
        </ListItem>
        <ListItem style={{ backgroundColor: "#fff"}} last>
          <Body>
            {( Platform.OS === 'android' )
              ?
              ( <ProgressBarAndroid style={{transform: [{ scaleX: 1.0 }, { scaleY: 2}], height:7}} progressTintColor="#8e44ad" progress = { this.state.progress } styleAttr = "Horizontal" indeterminate = { false } /> )
              :
              ( <ProgressViewIOS style={{transform: [{ scaleX: 1.0 }, { scaleY: 5}], height:12}} progressTintColor="#8e44ad" progress = { this.state.progress } /> )
            }
          </Body>
        </ListItem>
      </Content>
    );
  }
}

export default withNavigation(Info);
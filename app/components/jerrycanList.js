import React, { Component } from 'react';
import { Content, List } from 'native-base';
import JerrycanListItem from './jerrycanListItem';

export default class JerrycanList extends Component {
  render() {
    return (
        <Content>
          <List>
            <JerrycanListItem />
            <JerrycanListItem />
            <JerrycanListItem />
          </List>
        </Content>
    );
  }
}
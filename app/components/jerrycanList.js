import React, { Component } from 'react';
import { Content, List } from 'native-base';
import JerrycanListItem from './jerrycanListItem';


export default class JerrycanList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Content>
          <List>
            {
            this.props.data.map((jerrycan) => {
              return <JerrycanListItem 
                key={jerrycan._id} 
                data={jerrycan} 
                handleDeleteJerrycan={() => this.props.handleDeleteJerrycan}
                handleEditJerrycan={() => this.props.handleEditJerrycan}
                />
            })
            }
          </List>
        </Content>
    );
  }
}
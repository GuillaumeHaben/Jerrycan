import React, { Component } from 'react';
import { Content, List } from 'native-base';
import JerrycanListItem from './jerrycanListItem';


export default class JerrycanList extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const jerrycansSorted = this.props.data.sort ( function (jerrycan1, jerrycan2){
      return new Date(jerrycan1.fillingDate) - new Date(jerrycan2.fillingDate);
    });

    return (
        <Content>
          <List style={{backgroundColor: "#fff"}}>
            {
            jerrycansSorted.map((jerrycan) => {
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
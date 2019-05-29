import React, { Component } from 'react';
import { ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class JerrycanListItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <ListItem avatar 
        onPress={() => this.props.navigation.navigate(
          'Jerrycan', 
          {'data': this.props.data,
          'settings': this.props.settings,
          'handleDeleteJerrycan': this.props.handleDeleteJerrycan,
          'handleEditJerrycan': this.props.handleEditJerrycan}
        )}
      >
        <Left>
        {this.props.data.status ? <Thumbnail small square 
                  source={{uri: 'https://lh3.googleusercontent.com/-UDtaCnnSnyYf9oghAzbWBWzpX10aFqOtWgItIsByDaXwKbBKw4gUECIQpV3Udw_YP29Vp124vxgQSGMoKO4t7Z5SXOrZoHx9iJWhts4TaNjjCTSItOeM2u8X5nIWSvISZiek6fbw5GCCSfQ8OsaJgl957EPxu53WDlh7dBYxgHfz6LUQ1vQpo1O9lpZ2N2zA-xs7Cqd7m0SeWK7bw7YR4rNEfanoZ6NQ7rx5JDYJiI4XnQt-oDACOsQGcR6g9o_uKGlbASGU-PX9BGwpbOAKSSqXxuc-6YxTb7yoFBx0GIgI90gFuPFcqttYLO1ZZFWZxmejXPmlPFdLzCdTKrQ5kUqQ9y5E3P5TCqNBv_fcOWaZQnPGBxUg6mWRbhKL4U1KCVc-MMHCxtnZ0Qsh5_J2Geb0M6LP_IOY0vbq4IcdnN1jGnEtIG4Dc-m4OKQKM5xetfPXgsSpoZrX-ezg35HFbX6ZnQRdIw9ZIDPCbCX3pA4KTEnEJXU1U8IbmPI4vnWgx789FApkwx6XeybC_SLNvpT85fZ6mcVe7xlH2DY9Nv0DFRQ9tlYvMrOQIc--uyv=w2880-h1328'}} 
                  /> : <Thumbnail small square source={{uri: 'https://lh3.googleusercontent.com/qxQa3QUF5IwhWajk1wALrzLm7GmKCA1q1ZbMa8R-1e7H-LdyU16iC3GYIVsMCYk3Gv2OXtORcxZs0POeOYiaasULAq87yChKIB_ZZgri0vNkP_YqGm7NBtZ2sfbRAfEzbFLXRZ6bxbhMHkn4vKkL_I_zCZLZXKv2daAaZmt7evuznNThzZ3xRp0k1MBcqGvjPNjUuv22zLs44GW_9hu1m7VyIivPRlhmWT0FR8VYoWfZSuZZXcbH9pDJKiZjUnE26iRKQ0QsZ84uuaB7QTmIZE0yhZr53kx4YO5eEHcU3Entqe2wU0x-b98a21_FPo-OWgVGMnrmBztVTaDqxvYShB2DTVOnnYhJrkxdI6v5x4YADyuTkG34Z0Xuqds77nJT3HutLLt7u7as25WZ260JyD8MTzTymb2AZG2UYM0uNXiB8Jnobyau1yD3CkpshZDtjOQ5d0LacqWNIWnYjRFEHZfeyPYYzSqn-J7xz0QWw7xoh14JeRteGJuPi775XV59zy25Ggt0p9tY0d16xPaEm2mnR9DGPW2El5iivNF67S-N331yrx2-iqIuyYM-Z0Hq=w2876-h1406'}} 
                  />}
        </Left>
        
        <Body style={{minHeight: 70}}>
          <Text 
          style={
          !this.props.data.location && 
          !this.props.data.capacity ? 
          styles.bodyEmpy : 
          styles.bodyFull}
          >
            {!!this.props.data.id ? this.props.data.id : "New jerrycan"}
          </Text>
          {!!this.props.data.location && <Text note>{this.props.data.location}</Text>}
          {!!this.props.data.capacity && <Text note>{this.props.data.capacity}L</Text>}
        </Body>
        {!!this.props.data.fillingDate != '' && 
        <Right>
          <Text note style={{ marginTop:19 }}> {new Date(this.props.data.fillingDate).toLocaleDateString("fr-FR")}</Text>
        </Right>}
      </ListItem>

    );
  }
}

const styles = StyleSheet.create({
  bodyEmpy: {
    marginTop: 15
  },
  bodyFull: {
    marginTop: 0
  }
});

export default withNavigation(JerrycanListItem);
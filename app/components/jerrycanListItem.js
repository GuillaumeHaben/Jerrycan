import React, { Component } from 'react';
import { ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class JerrycanListItem extends Component {
  render() {
    return (
      <ListItem avatar onPress={() => this.props.navigation.navigate('Jerrycan')}>
        <Left>
          <Thumbnail square source={{ uri: 'https://lh3.googleusercontent.com/-UDtaCnnSnyYf9oghAzbWBWzpX10aFqOtWgItIsByDaXwKbBKw4gUECIQpV3Udw_YP29Vp124vxgQSGMoKO4t7Z5SXOrZoHx9iJWhts4TaNjjCTSItOeM2u8X5nIWSvISZiek6fbw5GCCSfQ8OsaJgl957EPxu53WDlh7dBYxgHfz6LUQ1vQpo1O9lpZ2N2zA-xs7Cqd7m0SeWK7bw7YR4rNEfanoZ6NQ7rx5JDYJiI4XnQt-oDACOsQGcR6g9o_uKGlbASGU-PX9BGwpbOAKSSqXxuc-6YxTb7yoFBx0GIgI90gFuPFcqttYLO1ZZFWZxmejXPmlPFdLzCdTKrQ5kUqQ9y5E3P5TCqNBv_fcOWaZQnPGBxUg6mWRbhKL4U1KCVc-MMHCxtnZ0Qsh5_J2Geb0M6LP_IOY0vbq4IcdnN1jGnEtIG4Dc-m4OKQKM5xetfPXgsSpoZrX-ezg35HFbX6ZnQRdIw9ZIDPCbCX3pA4KTEnEJXU1U8IbmPI4vnWgx789FApkwx6XeybC_SLNvpT85fZ6mcVe7xlH2DY9Nv0DFRQ9tlYvMrOQIc--uyv=w2880-h1328' }} />
        </Left>
        <Body>
          <Text>Bidon</Text>
          <Text note>Doing what you like will always keep you happy . .</Text>
        </Body>
        <Right>
          <Text note>24 Juillet 2018</Text>
        </Right>
      </ListItem>
    );
  }
}

export default withNavigation(JerrycanListItem);
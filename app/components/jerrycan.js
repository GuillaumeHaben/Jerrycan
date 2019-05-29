import React, { Component } from 'react';
import { Content, Item, Form, Input, Label, Button, Text, Icon, Picker, DatePicker, Thumbnail, Body } from 'native-base';
import { withNavigation } from 'react-navigation';
import { Switch, StyleSheet, Alert } from 'react-native';

class Jerrycan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.data._id,
      id: this.props.data.id,
      fillingDate: this.props.data.fillingDate,
      location: this.props.data.location,
      gasType: this.props.data.gasType,
      capacity: this.props.data.capacity,
      status :  this.props.data.status
    };
    this.changeDate = this.changeDate.bind(this);
    this.edit = !!this.props.handleEditJerrycan() ? this.props.handleEditJerrycan() : this.props.navigation.getParam('handleEditJerrycan', null);
    this.del = !!this.props.handleDeleteJerrycan() ? this.props.handleDeleteJerrycan() : this.props.navigation.getParam('handleDeleteJerrycan', null);
  }

  _showAlert = () => {
    Alert.alert(
      'Warning',
      'Are you sure to delete this jerrycan?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: () => this.handleDelete()},
      ],
      { cancelable: true }
    )
  }

  handleDelete = () => {
    this.del(this.props.data._id);
    this.props.navigation.navigate('List');
  }

  //Location
  changeLocation(value) {
    this.setState({
      location: value
    });
  }

  //Gas Type
  changeGasType(value) {
    this.setState({
      gasType: value
    });
  }

  //FillingDate
  changeDate(newDate) {
    this.setState({ fillingDate: newDate });
  }
  
  handleEdit = () => {
    this.edit(
      this.state._id,
      this.state.id,
      this.state.fillingDate,
      this.state.location,
      this.state.gasType,
      this.state.capacity,
      this.state.status, () => {this.props.navigation.navigate('List')}
    );
  }

  handleChangeStatus = () => {
    if (this.state.status == true) {
      this.setState({fillingDate: ''});
    } else {
      this.setState({fillingDate: new Date()});
    }
    this.setState({status: !this.state.status});
  }

  render() {    
    return (
        <Content>
          <Body style={{ marginTop: 20, marginBottom: 20 }}>
          {this.state.status ? <Thumbnail square 
                  source={{uri: 'https://lh3.googleusercontent.com/-UDtaCnnSnyYf9oghAzbWBWzpX10aFqOtWgItIsByDaXwKbBKw4gUECIQpV3Udw_YP29Vp124vxgQSGMoKO4t7Z5SXOrZoHx9iJWhts4TaNjjCTSItOeM2u8X5nIWSvISZiek6fbw5GCCSfQ8OsaJgl957EPxu53WDlh7dBYxgHfz6LUQ1vQpo1O9lpZ2N2zA-xs7Cqd7m0SeWK7bw7YR4rNEfanoZ6NQ7rx5JDYJiI4XnQt-oDACOsQGcR6g9o_uKGlbASGU-PX9BGwpbOAKSSqXxuc-6YxTb7yoFBx0GIgI90gFuPFcqttYLO1ZZFWZxmejXPmlPFdLzCdTKrQ5kUqQ9y5E3P5TCqNBv_fcOWaZQnPGBxUg6mWRbhKL4U1KCVc-MMHCxtnZ0Qsh5_J2Geb0M6LP_IOY0vbq4IcdnN1jGnEtIG4Dc-m4OKQKM5xetfPXgsSpoZrX-ezg35HFbX6ZnQRdIw9ZIDPCbCX3pA4KTEnEJXU1U8IbmPI4vnWgx789FApkwx6XeybC_SLNvpT85fZ6mcVe7xlH2DY9Nv0DFRQ9tlYvMrOQIc--uyv=w2880-h1328'}} 
                  /> : <Thumbnail square source={{uri: 'https://lh3.googleusercontent.com/qxQa3QUF5IwhWajk1wALrzLm7GmKCA1q1ZbMa8R-1e7H-LdyU16iC3GYIVsMCYk3Gv2OXtORcxZs0POeOYiaasULAq87yChKIB_ZZgri0vNkP_YqGm7NBtZ2sfbRAfEzbFLXRZ6bxbhMHkn4vKkL_I_zCZLZXKv2daAaZmt7evuznNThzZ3xRp0k1MBcqGvjPNjUuv22zLs44GW_9hu1m7VyIivPRlhmWT0FR8VYoWfZSuZZXcbH9pDJKiZjUnE26iRKQ0QsZ84uuaB7QTmIZE0yhZr53kx4YO5eEHcU3Entqe2wU0x-b98a21_FPo-OWgVGMnrmBztVTaDqxvYShB2DTVOnnYhJrkxdI6v5x4YADyuTkG34Z0Xuqds77nJT3HutLLt7u7as25WZ260JyD8MTzTymb2AZG2UYM0uNXiB8Jnobyau1yD3CkpshZDtjOQ5d0LacqWNIWnYjRFEHZfeyPYYzSqn-J7xz0QWw7xoh14JeRteGJuPi775XV59zy25Ggt0p9tY0d16xPaEm2mnR9DGPW2El5iivNF67S-N331yrx2-iqIuyYM-Z0Hq=w2876-h1406'}} 
                  />}
          </Body>
          <Form style={{ backgroundColor: "#fff"}}>
            <Item inlineLabel last>
              <Label>Id</Label>
              <Input autoCapitalize="characters" returnKeyType='done' maxLength={8} value={this.state.id}
                onChangeText={(id) => this.setState({id})}/>
            </Item>
            <Item inlineLabel last>
              <Label>Capacity</Label>
              <Input keyboardType={'numeric'} returnKeyType='done' maxLength={2} value={this.state.capacity}
                onChangeText={(capacity) => this.setState({capacity})}/>
            </Item>
            <Item last picker style={styles.item}>
              <Label>Location</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                placeholder="Choose a location"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.location}
                onValueChange={this.changeLocation.bind(this)}
              >
                {
                this.props.settings.locations.map((loc) => {
                  return <Picker.Item key={loc._id} label={loc.name} value={loc.name} />
                })
                }
              </Picker>
            </Item>
            <Item last picker style={styles.item}>
              <Label>Gas type</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                placeholder="Choose a gas type"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.gasType}
                onValueChange={this.changeGasType.bind(this)}
              >
                <Picker.Item label="Super 98" value="Super 98" />
                <Picker.Item label="Mélange 2 temps" value="Mélange 2 temps" />
              </Picker>
            </Item>
            <Item inlineLabel last style={styles.item}>
              <Label>Full</Label>
              <Switch
                onValueChange={() => this.handleChangeStatus()}
                style={{marginBottom: 7, marginTop: 7, marginRight: 20}}
                value={this.state.status}
              />
            </Item>
            {!!this.state.status &&
            <Item inlineLabel>
              <Label>Filling Date</Label>
              <DatePicker
                locale={"fr"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText={!!this.state.fillingDate != '' && new Date(this.state.fillingDate).toLocaleDateString("fr-FR")}
                textStyle={{ color: "black" }}
                onDateChange={this.changeDate}
              />
            </Item>}
          </Form>
          <Button iconLeft full success style={{marginTop: 10}} onPress={() => this.handleEdit()}>
            <Icon name="check" type="FontAwesome"/>
            <Text>Save</Text>
          </Button>
          <Button iconLeft full danger style={{marginTop: 10}} onPress={this._showAlert}
          >
            <Icon name="trash-o" type="FontAwesome"/>
            <Text>Delete</Text>
          </Button>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default withNavigation(Jerrycan);
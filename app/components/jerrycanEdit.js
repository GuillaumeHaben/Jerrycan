import React, { Component } from 'react';
import { Content, Item, Form, Input, Label, Button, Text, Icon, Picker, DatePicker } from 'native-base';
import { withNavigation } from 'react-navigation';
import { Switch, StyleSheet } from 'react-native';

class JerrycanEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: this.props.data.number,
      fillingDate: this.props.data.fillingDate,
      location: this.props.data.location,
      capacity: this.props.data.capacity,
      status :  this.props.data.status
    };
    this.changeDate = this.changeDate.bind(this);
    this.edit = this.props.navigation.state.params.handleEditJerrycan();
  }

  //Location
  changeLocation(value) {
    this.setState({
      location: value
    });
  }

  //FillingDate
  changeDate(newDate) {
    this.setState({ fillingDate: newDate });
  }
  
  handleEdit = () => {
    this.edit(
      this.props.data._id,
      this.state.number,
      this.state.fillingDate,
      this.state.location,
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
    console.log(this.state.fillingDate);
    
    return (
        <Content>
          <Form>
            <Item inlineLabel last>
              <Label>Number</Label>
              <Input keyboardType={'numeric'} returnKeyType='done' maxLength={4} value={this.state.number}
                onChangeText={(number) => this.setState({number})}/>
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
                <Picker.Item label="Sous-sol" value="Sous-sol" />
                <Picker.Item label="Salle non-fumeur" value="Salle non-fumeur" />
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
          <Button iconLeft full success style={{marginTop: 10}} onPress={this.handleEdit}>
            <Icon name="check" type="FontAwesome"/>
            <Text>Save</Text>
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

export default withNavigation(JerrycanEdit);
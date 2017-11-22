// Budget Buddy Transaction History
import React, { Animated, Component } from 'react';

import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  ImageBackground,
  AppRegistry,
  Image,
  ScrollView,
  Dropdown,
  Picker,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import App from './App'
import Overview from './Overview'
import Profile from './Profile'
import Transactions from './Transactions'
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
  width: width(100),
  height: height(35),
  },

  item: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 10,
  margin: 2,
  borderColor: "#D8D8D8",
  borderWidth: 2,
  backgroundColor: 'rgba(275,275,275,0.4)',
  },

  subtitles: {
    fontFamily: "Lato",
    padding: 25,
    backgroundColor: 'rgba(0,0,0,0)'
  },

  itemInput: {
    flexDirection: 'row',
  },


})


export default class Add extends Component {

  state = {
    categoriesPressed: false,
    manualPressed: false,
    type: null,
  }

  static navigationOptions = {
    title: 'Addition',
    header: null,
  }

  _onPressButton(name, navigate) {
    if (name == 'Overview') {
      navigate("Overview", {screen: Overview})
    } else if (name == 'Profile') {
      navigate("Profile", {screen: Profile})
    } else if (name == 'Transactions') {
      navigate("Transactions", {screen: Transactions})
    } else if (name == 'Add') {

    }
  }

  onPressBox(type){
    if(type=="categories"){
      if(this.state.categoriesPressed === false){
        this.setState({categoriesPressed:true})
      }
      else if(this.state.categoriesPressed === true){
        this.setState({categoriesPressed:false})
      }
    }

    else if(type =="manual"){
      if(this.state.manualPressed === false){
        this.setState({manualPressed:true})
      }
      else if(this.state.manualPressed === true){
        this.setState({manualPressed:false})
      }
    }
  }


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <View style={{
          height: height(8),
          backgroundColor: '#74a8fc',
        }}>
          <Text style={{
            textAlign: 'center',
            fontFamily: 'quicksand_bold', // change
            fontSize: 24,
            marginTop: height(2),
            color: '#FFFFFF',
          }}>ADD EXPENSE</Text>
        </View>


        <View style={{backgroundColor: '#FCFCFE',}}>
          <View style={styles.itemInput}>
            <Text style={{
              padding: totalSize(1),
              fontSize: totalSize(2.5),
            }}>Item: </Text>
            <TextInput style={{
              fontSize: totalSize(2),
              marginTop: height(1),
            }}/>
          </View>

          <View style={styles.itemInput}>
            <Text style={{
              padding: totalSize(1),
              fontSize: totalSize(2.5),
            }}>Price: </Text>
            <TextInput style={{
              fontSize: totalSize(2),
              marginTop: height(1),
            }}/>
          </View>

          <View>
            <Text style={{
              padding: totalSize(1),
              fontSize: totalSize(2.5),
            }}>Type: </Text>
            <Picker
              selectedValue={this.state.type}
              onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
              <Picker.Item label="Food" value="food" />
              <Picker.Item label="Entertainment" value="entertainment" />
            </Picker>
          </View>

          <View style={styles.itemInput}>
            <Text style={{
              padding: totalSize(1),
              fontSize: totalSize(2.5),
            }}>Location: </Text>
            <TextInput style={{
              fontSize: totalSize(2),
              marginTop: height(1),
            }}/>
          </View>
        </View>

        <View style={{backgroundColor: '#FCFCFE', paddingBottom: width(5)}}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: width(90),
            marginLeft: width(12),
            marginBottom: height(1),
            marginTop: height(2),
          }}>
            <TouchableOpacity onPress={() => this._onPressButton('Overview', navigate)}>
                <Image source = {require('./images/overview.png')} style={{
                  width: width(7),
                  height: height(3),
                  marginLeft: width(1.5)
                }} />
                <Text style={{fontFamily: 'lato_bold', fontSize: 12, marginTop: height(1),}}>Overview</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: width(13)}} onPress={() => this._onPressButton('Profile', navigate)}>
                <Image source = {require('./images/profile.png')} style={{
                  width: width(7),
                  height: height(3),
                  marginLeft: width(1.5)
                }} />
                <Text style={{fontFamily: 'lato_bold', fontSize: 12, marginTop: height(1), marginLeft: width(1.3)}}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{marginLeft: width(12)}} onPress={() => this._onPressButton('Transactions', navigate)}>
                <Image source = {require('./images/transactions.png')} style={{
                  width: width(7),
                  height: height(3),
                  marginLeft: width(2.3)
                }} />
                <Text style={{fontFamily: 'lato_bold', fontSize: 12, marginTop: height(1)}}>Transactions</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{marginLeft: width(12)}} onPress={() => this._onPressButton('Add', navigate)}>
                <Image source = {require('./images/add.png')} style={{
                  width: width(7),
                  height: height(3),
                  tintColor: '#74a8fc',
                }} />
                <Text style={{fontFamily: 'lato_bold', fontSize: 12, marginTop: height(1), marginLeft: width(1),  color: '#74a8dc'}}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

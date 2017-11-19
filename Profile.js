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
  Alert,
  Button,
  ImageBackground,
  AppRegistry,
  Image,
  ScrollView

} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { width, height, totalSize } from 'react-native-dimension';
import App from './App'
import Transactions from './Transactions'
import Overview from './Overview'
import Add from './Add'

const styles = StyleSheet.create({
  container: {
    width: width(100),
    height: height(30),
    marginBottom: height(5)
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
    fontFamily: 'Lato',
    marginLeft: width(5),
    marginBottom: height(1),
    fontWeight: 'bold',
    width: width(70),
    fontSize: 18,
  },
  dollars: {
    marginLeft: width(5),
    marginBottom: height(3.5),
    fontFamily: 'quicksand_regular',
    width: width(80),
    fontSize: 18
  }

})

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state={
    }
  }
  _onPressButton(name, navigate) {
    if (name == 'Overview') {
      navigate("Overview", {screen: Overview})
    } else if (name == 'Profile') {

    } else if (name == 'Transactions') {
      navigate("Transactions", {screen: Transactions})
    } else if (name == 'Add') {
      navigate("Add", {screen: Add})
    }
  }

  _onPressEdit() {
    Alert.alert(
      'Upgrade Required',
      'Please Purchase our $0.99 upgrade in order to customize your budget.'
    )
  }

  static navigationOptions = {
    title: 'Transaction History',
    header: null,
    //header: true,
  }


  render() {
    var database = require('./database.json');
    const {navigate} = this.props.navigation

    return (
      <View style={{backgroundColor: '#FCFCFE'}}>
        <ImageBackground source={require('./images/tropical.png')} style={styles.container}>
          <Text style={{backgroundColor:'rgba(0,0,0,0)', color: 'rgba(255,255,255,1)', fontFamily:'quicksand_bold', fontSize: totalSize(5), marginTop:height(5), marginLeft:width(28)}}>JOHN DOE</Text>
          <Image source={require('./images/profilePic.png')} style ={{width:width(35), height:width(35), marginTop:height(3), marginLeft:width(31)}}/>
        </ImageBackground>

        {
          database.totals.values.map((item, index) => (
            <View key = {index} style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
              <View>
                <Text style={styles.subtitles}>{item.name}</Text>
                <Text style={styles.dollars}>{item.dollar}</Text>
              </View>
              <TouchableOpacity onPress={() => this._onPressEdit()}>
                <Image source={require("./images/edit.png")} style={{
                  width: width(5),
                  tintColor:item.name == "REWARDS" ? '#FCFCFE': 'rgba(0,0,0,1)',
                  height: height(3)
                }} />
              </TouchableOpacity>
            </View>
          ))
        }

        <View style={{backgroundColor: '#FCFCFE', paddingBottom: width(5)}}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: width(90),
            marginLeft: width(12),
            marginTop: height(6),
            marginBottom: height(2.5)
          }}>
            <TouchableOpacity onPress={() => this._onPressButton('Overview', navigate)}>
                <Image source = {require('./images/overview.png')} style={{
                  width: width(7),
                  height: height(3),
                  marginLeft: width(1.5)
                }} />
                <Text style={{fontFamily: 'lato_bold', fontSize: 12, marginTop: height(1)}}>Overview</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: width(13)}} onPress={() => this._onPressButton('Profle', navigate)}>
                <Image source = {require('./images/profile.png')} style={{
                  width: width(7),
                  tintColor: '#74a8fc',
                  height: height(3),
                  marginLeft: width(1.5)
                }} />
                <Text style={{fontFamily: 'lato_bold', fontSize: 12, marginTop: height(1), marginLeft: width(1.3),  color:'#74a8dc'}}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{marginLeft: width(12)}} onPress={() => this._onPressButton('Transactions', navigate)}>
                <Image source = {require('./images/transactions.png')} style={{
                  width: width(7),
                  height: height(3),
                  marginLeft: width(2.3)
                }} />
                <Text style={{fontFamily: 'lato_bold', fontSize: 12, marginTop: height(1),}}>Transactions</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{marginLeft: width(12)}} onPress={() => this._onPressButton('Add', navigate)}>
                <Image source = {require('./images/add.png')} style={{
                  width: width(7),
                  height: height(3),
                }} />
                <Text style={{fontFamily: 'lato_bold', fontSize: 12, marginTop: height(1), marginLeft: width(1)}}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>


    )
  }
}

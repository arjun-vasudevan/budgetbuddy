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

import Camera from 'react-native-camera';
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    margin: 2,
    position: 'relative',
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

  capture: {
    borderRadius: 5,
    padding: 10,
    marginTop: height(80),
    width: width(11),
    height: height(7),
    marginLeft: width(45)
  }


})


export default class Add extends Component {

  state = {
    categoriesPressed: false,
    manualPressed: false,
    type: null,
    mapSelected: false,
    cameraOn: false,
    imageTaken: false,    
    imagePath: './images/camera.png',
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

  _changeMap(selected) {
    if (selected) {
      this.setState({mapSelected: true})
    } else if (!selected) {
      this.setState({mapSelected: false})
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

  
  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((path) => {this.setState({imagePath: path.path, imageTaken: true, cameraOn: false})})
      .catch(err => console.error(err));
  }

  render() {
    var imagePath = this.state.imagePath;
    const {navigate} = this.props.navigation;
    var database = require('./database.json');    
    return (
      <View>
        <View style={{
          height: height(8),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#429F46',
        }}>
          <TouchableOpacity onPress={() => {this.setState({cameraOn: true})}}>
            <Image source={require('./images/camera.png')} style={{marginLeft: width(4), width: width(5), height: height(3), marginTop: height(1)}}></Image>
          </TouchableOpacity>
          <Text style={{
            textAlign: 'center',
            fontFamily: 'quicksand_bold', // change
            fontSize: 24,
            marginTop: height(0.5),
            marginLeft: width(2),
            color: '#FFFFFF',
          }}>ADD EXPENSE</Text>
          <TouchableOpacity onPress={() => {navigate("Overview", {screen: Overview})}}>
            <Image source={require('./images/done.png')} style={{marginRight: width(4), width: width(5), height: height(3), marginTop: height(1)}}></Image>
          </TouchableOpacity>
        </View>

        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={{height: this.state.cameraOn ? height(100) : height(0)}}>
          <TouchableOpacity onPress={this.takePicture.bind(this)}>
            <Image source={require('./images/capture.png')} style={styles.capture}  />
          </TouchableOpacity>
        </Camera>
        
        <ImageBackground source={{uri: imagePath, isStatic: true}} style={{height: this.state.imageTaken ? height(100) : 0}} > 
            <TouchableOpacity onPress={() => {this.setState({cameraOn: false, imageTaken: false})}}>
                <Text style={{color: '#FFFFFF', marginTop: height(75), fontFamily: 'quicksand_bold', fontSize: 24, marginLeft: width(43)}}>CANCEL</Text>
            </TouchableOpacity>
        </ImageBackground>
        <ScrollView style={{backgroundColor: '#FCFCFE',}}>
          <Image source={this.state.mapSelected ? require('./images/MapSelected.png'): require('./images/Map.png')} resizeMode='contain' style={{position: 'relative', height: height(40), width: undefined}}></Image>
          <View style={styles.item}>
            <Text style={{
              fontSize: totalSize(2.5),
              marginLeft: width(5),
              fontFamily: 'quicksand_bold',
              width: width(15)
            }}>ITEM: </Text>
            <TextInput onChangeText= {(text) => {database.transactions.few[0].name=text, database.transactions.all[0].name=text}} style={{
              fontSize: totalSize(2),
              width: width(70),
              marginTop: height(1),
            }}/>
          </View>

          <View style={styles.item}>
            <Text style={{
              fontSize: totalSize(2.5),
              marginLeft: width(5),
              fontFamily: 'quicksand_bold',
              width: width(15)
            }}>PRICE: </Text>
            <TextInput onChangeText= {(text) => {database.transactions.few[0].spent=text, database.transactions.all[0].spent=text, database.transactions.total=505.05+99.90}} style={{
              fontSize: totalSize(2),
              width: width(70),
              marginTop: height(1),
            }}/>
          </View>

          <View style={styles.item}>
            <Text style={{
              fontSize: totalSize(2.5),
              marginLeft: width(5),
              fontFamily: 'quicksand_bold',
              width: width(25)
            }}>LOCATION: </Text>
            <TextInput style={{
              fontSize: totalSize(2),
              width: width(60),
              marginTop: height(1),
            }} onSubmitEditing={() => {this._changeMap(true)}}/>
          </View>

          <View style={styles.item}>
            <Text style={{
              fontSize: totalSize(2.5),
              marginLeft: width(5),
              fontFamily: 'quicksand_bold',
              width: width(15)
            }}>TYPE: </Text>
            <Picker
              selectedValue={this.state.type}
              style={{width: width(70), marginTop: width(0.2)}}
              onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
              <Picker.Item label="Food" value="food" />
              <Picker.Item label="Clothing" value="clothing" />
              <Picker.Item label="Entertainment" value="entertainment" />
              <Picker.Item label="Groceries" value="groceries" />
              <Picker.Item label="Bills" value="bills" />
            </Picker>
          </View>
        </ScrollView>

        <View style={{backgroundColor: '#FCFCFE', paddingBottom: width(5)}}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: width(90),
            marginLeft: width(12),
            marginTop: height(7.5),
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
                  tintColor: '#429F46',
                }} />
                <Text style={{fontFamily: 'lato_bold', fontSize: 12, marginTop: height(1), marginLeft: width(1),  color: '#429F46'}}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

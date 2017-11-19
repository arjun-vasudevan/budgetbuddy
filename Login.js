// Budget Buddy LOGIN
import React, { Component } from 'react';

import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Button,
  ImageBackground,
  AppRegistry

} from 'react-native';

import { StackNavigator } from 'react-navigation';
import App from './App'
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  title: {
    color: "rgba(275,275,275,0.9)",
    fontFamily: 'Lato',
    fontWeight: 'bold',
    textAlign  : 'center',
    marginTop: height(35),
    fontSize: totalSize(4),
    backgroundColor: 'rgba(0,0,0,0)'
  },

  container: {
  flex: 1,
  width: width(100),
  height: height(100),
  }
})


export default class Login extends Component {

  state= {
    loginCheck: null,
    username: '',
    password: '',
  }

  static navigationOptions = {
    title: 'Login',
    header: null,
  }


  _onPressButton(database, navigate) { //on press login
      if(this.state.username in database.usernames){ //check if username in database
        if(database.usernames[this.state.username] === this.state.password){ //if yes, check if password matches
          this.setState({
            loginCheck: true
          })
          Keyboard.dismiss();
          navigate("Overview", {screen: "Overview"})
        }

        else{ //password does not match
          this.setState({
            loginCheck: false
          })
        }
      }

      else{ //username not in storage
        this.setState({
          loginCheck: false
        })
      }
      return this.state.loginCheck
  };

  render() {

    StatusBar.setHidden(true);
    var database = require('./database.json');
    const {navigate} = this.props.navigation

    return (
      <ImageBackground source = {require('./images/Restaurants.png')} style={styles.container} >

        <Text style={styles.title}>Budget Buddy</Text>

        <TextInput
          style={{
            height:height(5),
            padding: 5,
            marginLeft: width(15),
            marginTop:height(2),
            width: width(70),
            backgroundColor: 'rgba(275,275,275,0.5)',
          }}
          placeholder= "Username or Email"
          maxLength = {25}
          autoCapitalize = 'none'
          returnKeyLabel = {'next'}
          onChangeText= {(text) => this.setState({username: text})}
        />

        <TextInput
          style={{
            height:height(5),
            padding: 5,
            marginLeft: width(15),
            marginTop:height(2),
            width: width(70),
            backgroundColor: 'rgba(275,275,275,0.5)',
          }}
          placeholder = "Password"
          maxLength = {20}
          secureTextEntry = {true}
          returnKeyLabel={"next"}
          onChangeText= {(text) => this.setState({password:text})}
        />

        <View style={{backgroundColor: 'rgba(0,0,0,0)', marginTop: height(5)}}>
          <TouchableOpacity onPress={() => this._onPressButton(database, navigate)}>
              <Text style={{
                color: '#rgba(275,275,275,0.7)',
                textAlign: 'center',
                fontFamily: 'Lato',
                height: height(8),
                fontSize: totalSize(2.5),
              }}>Lets Go!</Text>
          </TouchableOpacity>

          <Text style={{ // invalid login pop-up
            color: (this.state.loginCheck == false ? 'white': 'rgba(0,0,0,0)'),
            fontFamily: 'Verdana',
            textAlign: 'center',
            marginTop: height(24.5),
            height: height(8),
            padding: height(2.4),
            fontSize: totalSize(2),
            backgroundColor: (this.state.loginCheck == false ? 'rgba(255,80,80,0.7)': 'rgba(0,0,0,0)')
          }}> Incorrect Email or Password </Text>
          </View>
      </ImageBackground>
    )
  }
}

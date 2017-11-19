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
  Dropdown

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

})


export default class Add extends Component {

  state = {
    categoriesPressed: false,
    manualPressed: false
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
        <View>
          <TouchableOpacity
            onPress={() => this.onPressBox("categories")}>
            <View style={{backgroundColor: 'powderblue', height: height(26),}}>
              <Text style={{
                  color: 'rgba(0,0,0,0.5)',
                  fontFamily:'quicksand_bold',
                  fontSize: totalSize(4),
                  marginTop: height(12),
                  textAlign: 'center'
                }}>CATEGORIES</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{
              backgroundColor: (this.state.categoriesPressed === true ? 'white': 'rgba(0,0,0,0)'),
              height: (this.state.categoriesPressed === true ? height(8): height(0)),
            }}>
              <Text style={{
                color: (this.state.categoriesPressed === true ? 'rgba(0,0,0,0.5)': 'rgba(0,0,0,0)'),
                textAlign: 'center',
                padding: 20,
                fontFamily: 'Lato',
                fontSize: totalSize(2),
              }}>Food</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{
              backgroundColor: (this.state.categoriesPressed === true ? 'rgba(0,0,0,0.05)': 'rgba(0,0,0,0)'),
              height: (this.state.categoriesPressed === true ? height(8): height(0)),
            }}>
              <Text style={{
                color: (this.state.categoriesPressed === true ? 'rgba(0,0,0,0.5)': 'rgba(0,0,0,0)'),
                textAlign: 'center',
                padding: 20,
                fontFamily: 'Lato',
                fontSize: totalSize(2),
              }}>Entertainment</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{
              backgroundColor: (this.state.categoriesPressed === true ? 'white': 'rgba(0,0,0,0)'),
              height: (this.state.categoriesPressed === true ? height(8): height(0)),
            }}>
              <Text style={{
                color: (this.state.categoriesPressed === true ? 'rgba(0,0,0,0.5)': 'rgba(0,0,0,0)'),
                textAlign: 'center',
                padding: 20,
                fontFamily: 'Lato',
                fontSize: totalSize(2),
              }}>Clothing</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{
              backgroundColor: (this.state.categoriesPressed === true ? 'rgba(0,0,0,0.05)': 'rgba(0,0,0,0)'),
              height: (this.state.categoriesPressed === true ? height(8): height(0)),
            }}>
              <Text style={{
                color: (this.state.categoriesPressed === true ? 'rgba(0,0,0,0.5)': 'rgba(0,0,0,0)'),
                textAlign: 'center',
                padding: 20,
                fontFamily: 'Lato',
                fontSize: totalSize(2),
              }}>Accessories</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{
              backgroundColor: (this.state.categoriesPressed === true ? 'white': 'rgba(0,0,0,0)'),
              height: (this.state.categoriesPressed === true ? height(8): height(0)),
            }}>
              <Text style={{
                color: (this.state.categoriesPressed === true ? 'rgba(0,0,0,0.5)': 'rgba(0,0,0,0)'),
                textAlign: 'center',
                padding: 20,
                fontFamily: 'Lato',
                fontSize: totalSize(2),
              }}>Arts</Text>

              <TouchableOpacity>
                <View style={{
                  backgroundColor: (this.state.categoriesPressed === true ? 'rgba(0,0,0,0.05)': 'rgba(0,0,0,0)'),
                  height: (this.state.categoriesPressed === true ? height(8): height(0)),
                }}>
                  <Text style={{
                    color: (this.state.categoriesPressed === true ? 'rgba(0,0,0,0.5)': 'rgba(0,0,0,0)'),
                    textAlign: 'center',
                    padding:20,
                    fontFamily: 'Lato',
                    fontSize: totalSize(2),
                  }}>Miscellaneous</Text>
                </View>
              </TouchableOpacity>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress= {() => this.onPressBox("manual")}>
            <View style={{
              backgroundColor: 'skyblue',
              width: width(100),
              height:height(27),
            }}>
              <Text style={{
                  color: 'rgba(0,0,0,0.5)',
                  fontFamily:'quicksand_bold',
                  fontSize: totalSize(4),
                  marginTop: height(12),
                  textAlign: 'center'
                }}>PRICE</Text>
            </View>
          </TouchableOpacity>

          <TextInput style={{
            borderColor: this.state.manualPressed === false ? 'rgba(0,0,0,0)' : '#ffb0a3',
            height: (this.state.manualPressed === true ? height(8): height(0)),
            borderWidth: this.state.manualPressed === false? 0: 1,
            padding: (this.state.manualPressed === true ? 10: 0),
          }} placeholder="" />

          <TouchableOpacity>
            <View style={{
              backgroundColor: 'steelblue',
              width: width(100),
              height:height(27),
            }}>
              <Text style={{
                  color: 'rgba(0,0,0,0.5)',
                  fontFamily:'quicksand_bold',
                  fontSize: totalSize(4),
                  marginTop: height(12),
                  textAlign: 'center'
                }}>CAMERA</Text>
            </View>
          </TouchableOpacity>
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

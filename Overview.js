//main feed
import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  ImageBackground,
  ProgressBar,

} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Transactions from './Transactions'
import Profile from './Profile'
import Add from './Add'
import { width, height, totalSize } from 'react-native-dimension';

const styles=StyleSheet.create({
  item: {
    marginLeft: width(5),
    fontFamily: "Lato",
    marginTop: height(1.5),
    fontSize: 16,
    width: width(75)
  },
  price: {
    marginTop: height(1.5),
    textAlign: 'right',
    width: width(15)
  }
})

export default class Overview extends Component{

  state = {

  }

  static navigationOptions = {
    title: 'Overview',
    header: null
  }

  _onPressButton(name, navigate) {
    if (name == 'Overview') {

    } else if (name == 'Profile') {
      navigate("Profile", {screen: Profile})
    } else if (name == 'Transactions') {
      navigate("Transactions", {screen: Transactions})
    } else if (name == 'Add') {
      navigate("Add", {screen: Add})

    }
  }
  render() {
    const {navigate} = this.props.navigation;
    var database = require('./database.json');
    return (
        <View>
            <View style={{
              height: height(8), backgroundColor: "#429F46",}}>
              <Text style={{
                textAlign: 'center',
                fontFamily: 'quicksand_bold',
                fontSize: 28,
                marginTop: height(2),
                color: '#FFFFFF',
                }}>BUDGET BUDDY</Text>
            </View>
        <View style={{backgroundColor: '#FCFCFE',}}>
          <StatusBar
            hidden={false}
            barStyle='default'
          />
          <Text style = {{
            marginTop: height(5),
            textAlign: 'center',
            fontFamily: 'Lato',
            fontSize: 60,
          }}>${database.transactions.total}</Text>

          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
           <View style={{
             width: width(90),
             marginTop: height(5),
             height: height(2),
             borderRadius: 10,
             borderWidth: 0.75,
             borderColor: "#429F46",
             backgroundColor: "rgba(255,255,255,1)"
           }}>
             <View style={{
               backgroundColor: "#429F46",
               width: width(53),
               height: height(2),
               borderRadius: 10,
             }}/>
            </View>
          </View>

          <TouchableOpacity onPress={() => this._onPressButton('Transactions', navigate)}>
            <View>
              <Text style = {{
                marginTop: height(8),
                marginLeft: width(5),
                fontFamily: 'Lato',
                fontWeight: 'bold',
                fontSize: 18,
              }}>RECENT TRANSACTIONS</Text>
              <View>
                {database.transactions.few.map((item, index) => (
                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }} key={item.id}>
                      <Text style={styles.item}>{item.name}</Text>
                      <Text style={styles.price}>{item.spent}</Text>
                    </View>
                  ))
                }
              </View>
            </View>
          </TouchableOpacity>

          <View>
            <Text style = {{
              marginTop: height(4),
              marginLeft: width(5),
              fontFamily: 'Lato',
              fontWeight: 'bold',
              fontSize: 18,
            }}>CATEGORIES</Text>
            <View>
              {database.categories.values.map((item, index) => (
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }} key={index}>
                    <Text style={styles.item}>{item.name}</Text>
                    <Text style={styles.price}>{item.spent}</Text>
                  </View>
                ))
              }
            </View>
          </View>
          <Text style = {{
            marginTop: height(4),
            marginLeft: width(5),
            fontFamily: 'Lato',
            fontWeight: 'bold',
            fontSize: 18
          }}>FOOD FOR THOUGHT</Text>
          <Text style = {{
            marginTop: height(2),
            marginLeft: width(5),
            marginBottom: height(6),
            width: width(90),
            fontFamily: 'Lato',
          }}>{database.quotes.strings[Math.floor(Math.random() * 10)].quote}</Text>
        </View>
        <View style={{backgroundColor: '#FCFCFE', paddingBottom: width(5)}}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: width(90),
            marginLeft: width(12),
          }}>
            <TouchableOpacity onPress={() => this._onPressButton('Overview', navigate)}>
                <Image source = {require('./images/overview.png')} style={{
                  width: width(7),
                  height: height(3),
                  tintColor: '#429F46',
                  marginLeft: width(1.5)
                }} />
                <Text style={{fontFamily: 'lato_bold', fontSize: 12, marginTop: height(1), color: '#429F46'}}>Overview</Text>
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
                }} />
                <Text style={{fontFamily: 'lato_bold', fontSize: 12, marginTop: height(1), marginLeft: width(1)}}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

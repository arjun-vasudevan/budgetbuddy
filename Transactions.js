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

} from 'react-native';

import { StackNavigator } from 'react-navigation';
import App from './App'
import Overview from './Overview'
import Profile from './Profile'
import Add from './Add'
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
  flex: 1,
  width: width(100),
  height: height(100),
  },
  item: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: 10,
     marginBottom: height(0.2),
     borderBottomWidth: 1,
     marginLeft: width(4),
     marginRight: width(3),
     borderColor: "#D8D8D8",
     backgroundColor: 'rgba(275,275,275,0.4)',   
  },

  text: {
    fontFamily: 'Lato',
    color: '#969696',
    marginTop: height(1),
    fontSize: totalSize(1.5),
    marginLeft: width(1),
    padding:5,
  },
})

export default class Transactions extends Component {

  state = {
    data: [40, 53, 10, 23, 80],
    color: ['#f23737', '#fca87e','#8cfc7e','#7eeffc','#bc89ff'],
    indicators: ['Food and Drink', 'Clothing', 'Entertainment', 'Groceries', 'Bills']
  }

  static navigationOptions = {
    title: 'Transaction History',
    header: null
    //header: true,
  }

  _onPressButton(name, navigate) {
    if (name == 'Overview') {
      navigate("Overview", {screen: Overview})
    } else if (name == 'Profile') {
      navigate("Profile", {screen: Profile})
    } else if (name == 'Transactions') {

    } else if (name == 'Add') {
      navigate("Add", {screen: Add})

    }
  }

  render() {
    var database = require('./database.json');
    const {navigate} = this.props.navigation;

    return (
    //  <ImageBackground source={require('./images/transactionBG.png')} style={styles.container}>
    <View style={{backgroundColor:'#FCFCFE', width: width(100), height: height(100)}}>
        <View style={{
          height: height(8),
          backgroundColor: '#429F46',
        }}>
          <Text style={{
            textAlign: 'center',
            fontFamily: 'quicksand_bold',
            fontSize: 28,
            marginTop: height(2),
            color: '#FFFFFF',

          }}>RECENT TRANSACTIONS</Text>
        </View>

        <View style={{ flex: 1,}}>
          <View>
            {this.state.data.map((value, index) =>
              <View key={index}>
                <Text style={styles.text}>{this.state.indicators[index]}</Text>

                <View style={{
                  backgroundColor: this.state.color[index],
                  height: height(3),
                  width: width(this.state.data[index]), // Changed
                  borderTopRightRadius: 4,
                  borderBottomRightRadius: 4,}} value={value}/>
                </View>
            )}
          </View>
        </View>

        <Text style={{
          fontFamily:'Lato',
          marginLeft: width(5),
          backgroundColor:'rgba(0,0,0,0)',
          marginLeft: width(5),
          marginBottom: height(2),
          fontFamily: 'Lato',
          fontWeight: 'bold',
          fontSize: 18,
        }}>RECENT TRANSACTIONS</Text>

        <ScrollView contentContainerStyle={{height: height(60)}}>
         {
            database.transactions.all.map((item, index) => (
               <View key = {item.id} style = {styles.item}>
                  <Text style={{color:'rgba(0,0,0,0.5)', fontFamily: 'Lato'}}>{item.name}</Text>
                  <Text style={{color: 'rgba(0,0,0,0.5)', fontFamily: 'Lato'}}>{item.spent}</Text>
               </View>
            ))
         }
        </ScrollView>
        <View style={{backgroundColor: '#FCFCFE', paddingBottom: width(5)}}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: width(90),
            marginLeft: width(12),
            marginTop: height(2),
            marginBottom: height(1.5)
          }}>
            <TouchableOpacity onPress={() => this._onPressButton('Overview', navigate)}>
                <Image source = {require('./images/overview.png')} style={{
                  width: width(7),
                  height: height(3),
                  marginLeft: width(1.5)
                }} />
                <Text style={{fontFamily: 'lato_bold', fontSize: 12, marginTop: height(1)}}>Overview</Text>
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
                  tintColor: '#429F46',
                  marginLeft: width(2.3)
                }} />
                <Text style={{fontFamily: 'lato_bold', fontSize: 12, marginTop: height(1), color:'#429F46'}}>Transactions</Text>
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
//    </ImageBackground>
    )
  }
}

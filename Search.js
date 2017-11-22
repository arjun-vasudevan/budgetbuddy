// Search - Add an Expense Page
/*import React, { Component } from 'react';

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
  AppRegistry,
  ScrollView

} from 'react-native';

import { StackNavigator } from 'react-navigation';
import App from './App'
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  search: {
    borderWidth: 1,
    borderColor: '#DEF5FC',
    padding: 10,
  },
  item: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: 5,
    // marginBottom: height(0.1),
     marginLeft: width(2),
     marginRight: width(2),
     borderColor: "#D8D8D8",
     borderWidth: 1,
     height: height(8),
     backgroundColor: 'rgba(275,275,275,0.4)',
  },
})


export default class Search extends Component {

  state= {
    text: "",
  }

  loadItems(library, text){
    if(library.indexOf(text.toLowerCase()) >= 0){
      return "Hi";
    }
    else{
      return "No";
    }
  }
  static navigationOptions = {
    title: 'SearchAdd',
    header: null,
  }


  render() {
    var database = require('./database.json');
    StatusBar.setHidden(true);

    return (
      <View>

        <View style={{ // Header
          height: height(8),
          backgroundColor: '#74a8fc',
        }}>
          <Text style={{
            textAlign: 'center',
            fontFamily: 'Lato', // change
            fontSize: 24,
            marginTop: height(2),
            color: '#FFFFFF',
          }}>ADD EXPENSE</Text>
        </View>

        <TextInput
          style={styles.search}
          placeholder = "Search"
          autoCapitalize = 'none'
          returnKeyLabel={"next"}
          onChangeText= {(textvalue) => this.setState({text:textvalue})}
        />

        <Text>{this.state.text}</Text>
        <Text>{this.loadItems(database.purchase.food, this.state.text)}</Text>

        <ScrollView contentContainerStyle={{height: height(90)}}>
         {
            database.purchase.food.map((item, index) => (
              <TouchableOpacity key = {item.id}>
                 <View key = {item.id} style = {styles.item}>

                    <Text style={{color:'rgba(0,0,0,0.5)', fontFamily: 'Lato'}}>{item.name}</Text>
                    <Text style={{color: 'rgba(0,0,0,0.5)', fontFamily: 'Lato'}}>${item.price}</Text>
                 </View>
               </TouchableOpacity>
            ))
         }
        </ScrollView>


      </View>
    )
  }
}
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
}} placeholder="" /> */

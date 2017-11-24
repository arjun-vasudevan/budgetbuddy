import React, { Component } from 'react';

import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Animated,
  Easing
} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato',
    color: '#969696',
    marginTop: height(1),
    fontSize: totalSize(1.5),        
    marginLeft: width(1),
  }
});
export default class Graph extends Component {

  state =  {
    data: [40, 53, 10, 23, 80],
    color: ['#f23737', '#fca87e','#8cfc7e','#7eeffc','#bc89ff'],
    indicators: ['Food', 'Entertainment', 'Clothing', 'Hobbies', 'Travels']
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: height(10),}}>
        <View>
          {this.state.data.map((value, index) =>
            <View key={index}>
              <Text style={styles.text}>{this.state.indicators[index]}</Text>

              <Animated.View style={{
                backgroundColor: this.state.color[index],
                height: height(2),
                width: width(this.state.data[index]), // Changed
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4,}} value={value}/>
              </View>
          )}
        </View>
      </View>
    );
  }
}

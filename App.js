import React,{Component} from 'react';

import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Overview from './Overview'
import Transactions from './Transactions'
import Profile from './Profile'
import Add from './Add'

const App = StackNavigator(
  {
    Login: { screen: Login},
    Overview: {screen: Overview},
    Transactions: {screen: Transactions},
    Profile: {screen: Profile},
    Add: {screen: Add}
  });

export default App;

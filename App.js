import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import CreateAccountScreen from './modules/create-account/create-account'
import RecoverPasswordScreen from './modules/recover-password/recover-password'
import Inputs from "./modules/login-account/login-account";
import Test from "./modules/test-page";
import styles from './style'
import HomeScreen from "./modules/home/home";


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: Inputs,
    Account: CreateAccountScreen,
    Recover: RecoverPasswordScreen,
     Info: Test,
  }, 
  {
    initialRouteName: 'Info'
  }
);


export default class App extends Component {
  apiUrl = process.env.API_BASE_URL || "https://fathomless-shore-28246.herokuapp.com";
  render() {
    return <RootStack/>;
  }
};

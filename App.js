import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import CreateAccountScreen from './modules/create-account/create-account'
import RecoverPasswordScreen from './modules/recover-password/recover-password'
import Inputs from "./modules/login-account/login-account";
import Test from "./modules/test-page";
import HomeScreen from "./modules/home/home";
import ActivityInput from "./modules/activity-input/ActivityInput";
import FeedMaster from "./modules/feed/feed";
import { Font } from 'expo';
import UserDash from "./modules/userDash/userDash";
import CommentForm from "./components/ActivityCard/CommentForm";
import styles from './style'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: Inputs,
    Account: CreateAccountScreen,
    Recover: RecoverPasswordScreen,
    Info: HomeScreen,
    ActivityInput: ActivityInput,
    Feed: FeedMaster,
    UserDash: UserDash,
    Test: CommentForm,
  }, 
  {
    initialRouteName: 'Login'
  }
);


export default class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      'futura-book': require('./assets/fonts/FUW.ttf'),
      'great-vibes': require('./assets/fonts/GreatVibes-Regular.otf'),
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf')
    });
  }
  apiUrl = process.env.API_BASE_URL || "https://fathomless-shore-28246.herokuapp.com";
  render() {
    return <RootStack/>;
  }
};

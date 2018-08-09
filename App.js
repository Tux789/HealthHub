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
import Friends from './modules/friends/friends';

const RootStack = createStackNavigator(
  {
    Home: FeedMaster,
    Login: Inputs,
    Account: CreateAccountScreen,
    Recover: RecoverPasswordScreen,
    ActivityInput: ActivityInput,
    Feed: FeedMaster,
    UserDash: UserDash,
    Friends: Friends,
  }, 
  {
    initialRouteName: 'Login'
  }
);


export default class App extends Component { 
  render() {
    return <RootStack/>;
  }
};

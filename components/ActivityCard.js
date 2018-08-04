import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import styles from '../style';

class Activity extends Component {
      state = {
          chart,
          activityType,
          activityAmt,
          comments=[]
      }
      
    render() {
        // use view instead of div when using React Native
      return <view>
        <ChartImage chart={this.state}/>
        <ActType> {this.state.activityType}</ActType>
        <ActAmt> {this.state.ActAmt}</ActAmt>
      </view>
    }
  }

  export default ActivityCard;
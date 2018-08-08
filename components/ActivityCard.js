import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import styles from '../style';
import { Font } from 'expo';

class Activity extends Component {
      state = {
          chart,
          activityType,
          activityAmt,
      }
      
    render() {
        // use view instead of div when using React Native
      return 
      <ScrollView>
      
      <view style={styles.expandBox}>
        <ChartImage chart={this.state}/>
        <ActType> {this.state.activityType}</ActType>
        <ActAmt> {this.state.ActAmt}</ActAmt>
      </view>

      </ScrollView>
    }
  }

  export default ActivityCard;
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
// import styles from '../style';



const styles = StyleSheet.create({
  imgContain: {
    paddingTop: 10,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: 190,
    backgroundColor: 'white',
    justifyContent: "center",
  },

}); 

const TitleImage = props =>

<View style={styles.imgContain}>
  <Image
    style={styles.imgStyle}
    resizeMode="contain"
    source={require('../assets/images/healthHubLogo.png')}
  />
</View>


export default TitleImage;
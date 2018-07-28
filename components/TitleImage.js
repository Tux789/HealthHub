import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import styles from '../style';

const TitleImage = props =>

<View style={styles.imgContain}>
  <Image
    style={styles.imgStyle}
    resizeMode="contain"
    source={require('../assets/images/healthHubLogo.png')}
  />
</View>


export default TitleImage;
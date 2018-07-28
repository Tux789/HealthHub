import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import styles from '../style';

const NavButton = props => 
<TouchableOpacity
style={styles.linkinfo}
onPress={() => props.navigation.navigate(props.view)} {...props}>
<Text style={styles.linktext}> {props.children} </Text>
</TouchableOpacity>

export default NavButton;
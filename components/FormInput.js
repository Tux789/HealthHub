import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import styles from '../style';

const FormInput = (props) =>
    <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder= {props.name}
        placeholderTextColor="#60718d"
        autoCapitalize="none"
        // onChangeText={props.onchange} 
        {...props}/>
        


export default FormInput;

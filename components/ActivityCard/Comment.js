import React, { Component } from 'react';
import { View, Dimensions, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import styles from '../../style';

const Comment = props =>
    <View>
        <Text> {props.user}</Text>
        <Text> {props.comment}</Text>
    </View>

export default Comment;